<template>
  <div>Nuxt module playground!</div>
</template>

<script setup>
const squidex = useSquidex();

const sq_data = await squidex.getContent("theme-icons");

const graphdata = await squidex.getGraphQLQuery(`{
        queryPagesContents {
          id
          data{
            seo{
              en{
                slug
              }
            }
          }
        }
      }
      `);

console.log(sq_data);
console.log(graphdata);

const url = "content-events?$orderby=data/Date/iv desc";
const {
  data: sq_data2,
  pending,
  error,
  refresh,
} = reactive(
  await useFetch("/api/rest", {
    method: "POST",
    body: url,
    key: url.replace(/[^a-zA-Z0-9]/g, ""),
  })
);
</script>
