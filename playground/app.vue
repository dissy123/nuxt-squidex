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
</script>
