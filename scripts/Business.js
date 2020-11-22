
  export const business = (businesses) => {
    return `
        <section class="company">
            <h2 class="company__name">${businesses.companyName}</h2>
            <p>${businesses.addressFullStreet}</p>
            <p>${businesses.addressCity}, ${businesses.addressStateCode} ${businesses.addressZipCode}</p>
            <hr>
        </section>
    `
}