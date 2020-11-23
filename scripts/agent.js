export const agent = (agents) => {
  return `
      <section class="company">
          <h2 class="agent__name">${agents.name.nameFirst} ${agents.name.nameLast}</h2>
          <p>${agents.companyName}</p>
          <p>${agents.phoneWork}</p>
          
          <hr>
      </section>
  `
}