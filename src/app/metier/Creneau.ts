export class Creneau {
  public id: Number | undefined
  public dateCreneau: Date | undefined
  public LotUtilise: Number | undefined
  public Patient: Number | undefined
  public Pratiquant: Number | undefined

  formatDate(): void {
    if (this.dateCreneau != undefined) {
      let old: string = this.dateCreneau.toString()
      let nouvelle: Date = new Date()
      //2021-06-18T16:35:00Z
      let tab: string[] = old.split('T')
      let date: string = tab[0]
      let heure: string = tab[1]
      let tabDate: string[] = date.split('-')
      let tabHeure: string[] = heure.split(':')
      tabHeure[2] = tabHeure[2].slice(0, -1)
      nouvelle.setFullYear(parseInt(tabDate[0]), parseInt(tabDate[1]), parseInt(tabDate[2]))
      nouvelle.setHours(parseInt(tabHeure[0]), parseInt(tabHeure[1]), parseInt(tabHeure[2]))
      this.dateCreneau = nouvelle
    }

  }
}
