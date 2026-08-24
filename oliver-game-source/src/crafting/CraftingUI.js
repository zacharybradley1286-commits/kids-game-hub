import { getItemIcon } from '../ui/IconRegistry.js'

export class CraftingUI {
  constructor(inventory, itemRegistry, recipeRegistry, getStation, getPlayerTier, killedBosses) {
    this.inventory = inventory
    this.itemRegistry = itemRegistry
    this.recipeRegistry = recipeRegistry
    this.getStation = getStation
    this.getPlayerTier = getPlayerTier
    this.killedBosses = killedBosses
    this.el = document.getElementById('crafting-overlay')
    this.stationLabel = document.getElementById('crafting-station-label')
    this.recipeList = document.getElementById('recipe-list')
    this.visible = false
    this.onCraft = null
  }

  toggle() {
    this.visible ? this.hide() : this.show()
    return this.visible
  }

  show() {
    this.visible = true
    this.el.style.display = 'block'
    this.refresh()
  }

  hide() {
    this.visible = false
    this.el.style.display = 'none'
  }

  refresh() {
    const station = this.getStation()
    const tier = this.getPlayerTier()
    this.stationLabel.textContent = `Station: ${station.replace('_', ' ').toUpperCase()}`

    const allVisible = this.recipeRegistry.getAllVisible(
      this.inventory, station, tier, this.killedBosses
    )

    this.recipeList.innerHTML = ''
    for (const recipe of allVisible) {
      const canCraft = this.inventory.hasAll(recipe.ingredients)
      const row = document.createElement('div')
      row.className = `recipe-row${canCraft ? '' : ' unavailable'}`

      const resultItem = this.itemRegistry.getItem(recipe.resultItem)
      const ingList = Object.entries(recipe.ingredients)
        .map(([id, cnt]) => `${cnt}× ${this.itemRegistry.getItem(id)?.name ?? id}`)
        .join(', ')

      row.innerHTML = `
        <img src="${getItemIcon(resultItem)}" style="width:32px;height:32px;image-rendering:pixelated;flex-shrink:0;" />
        <div class="recipe-info">
          <div class="recipe-name">${resultItem?.name ?? recipe.resultItem}</div>
          <div class="recipe-ingredients">${ingList}</div>
        </div>
        <div class="recipe-result-count">${recipe.resultCount > 1 ? '×' + recipe.resultCount : ''}</div>
      `

      if (canCraft) {
        row.addEventListener('click', () => {
          const ok = this.recipeRegistry.craft(recipe, this.inventory, this.itemRegistry)
          if (ok) {
            this.onCraft?.(recipe)
            this.refresh()
          }
        })
      }

      this.recipeList.appendChild(row)
    }
  }
}
