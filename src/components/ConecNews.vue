<template>
    <div>
      <h2>Noticias de Ciencia, Tecnología, Psicología y Educación</h2>
      <div v-if="loading">Cargando noticias...</div>
      <div v-else>
        <div v-for="(article, index) in articles" :key="index" class="article">
          <h3>{{ article.title }}</h3>
          <p>{{ article.description }}</p>
          <a :href="article.link" target="_blank">Leer más</a>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ConecNews',
    data() {
      return {
        articles: [],
        loading: true,
      };
    },
    mounted() {
      this.fetchNews();
    },
    methods: {
      async fetchNews() {
        const apiKey = 'pub_650217b4e1a5dfdc0223d9417a3c850f5ca6a';
        const categories = ['science', 'technology', 'psychology', 'education'];
        const fromDate = '2023-01-19';
        const toDate = '2023-01-25';
        const promises = categories.map(category =>
          fetch(`https://newsdata.io/api/1/archive?apikey=${apiKey}&q=${category}&language=en&from_date=${fromDate}&to_date=${toDate}`)
            .then(response => {
              if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
              }
              return response.json();
            })
        );
  
        try {
          const results = await Promise.all(promises);
          console.log(results); // Verifica la estructura de los datos
          this.articles = results.flatMap(result => result.results);
          console.log(this.articles); // Verifica los artículos
        } catch (error) {
          console.error('Error fetching news:', error);
        } finally {
          this.loading = false;
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .article {
    margin-bottom: 20px;
  }
  </style>