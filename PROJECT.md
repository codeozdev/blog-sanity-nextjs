# SORULAR
`dark:selection:bg-gray-900` buradaki selection ne demek?
`prose`
`{new Date(post._createdAt).toISOString().split('T')[0]}` tarih formatini daha guzel gosterir



# Sanity

## Sanity Schemas
- Olusturdugumuz schemaslari index.ts klasorune ekliyoruz
- Schemalarimiza bilgilerimizi giriyoruz (sanity studio)

## Sanity Client
- Sanityden verilerimizi almak icin sanity client olusturuyoruz 
  - npm i next-sanity paketini kuruyoruz tabiki bunu sanity klasoru icine degil nextjs klasorune kuruyoruz
- **libs/sanity.ts** dosyasinda sanity client olusturuyoruz
  

# Vercel
- .vercelignore dosyasinda sanity klasorunu ignore ediyoruz