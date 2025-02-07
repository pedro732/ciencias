<template>
    <div>
      <h1>Artículos de Science y Education de NYT</h1>
      <div id="rss-feed" v-html="rssContent"></div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ConecFeedNY',
    data() {
      return {
        rssContent: ''
      };
    },
    mounted() {
      this.fetchRSS('Science');
      this.fetchRSS('Education');
    },
    methods: {
      async fetchRSS(section) {
        try {
          const response = await fetch(`https://rss.nytimes.com/services/xml/rss/nyt/${section}.xml`);
          const text = await response.text();
          const parser = new DOMParser();
          const xml = parser.parseFromString(text, 'text/xml');
          const items = xml.getElementsByTagName('item');
  
          let output = '';
          for (let i = 0; i < items.length; i++) {
            const title = items[i].getElementsByTagName('title')[0].textContent;
            const link = items[i].getElementsByTagName('link')[0].textContent;
            const description = items[i].getElementsByTagName('description')[0].textContent;
  
            output += `
              <div class="article">
                <h2><a href="${link}" target="_blank">${title}</a></h2>
                <p>${description}</p>
              </div>
            `;
          }
  
          this.rssContent += output; // Concatenar contenido
        } catch (error) {
          console.error('Error fetching RSS:', error);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  body {
    font-family: Arial, sans-serif;
  }
  .article {
    border-bottom: 1px solid #ccc;
    padding: 10px 0;
  }
  .article h2 {
    margin: 0;
  }
  </style>