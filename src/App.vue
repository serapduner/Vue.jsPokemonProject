<template>
<div id="app" class="center container">
  <router-link to="/">
<img role="logo" src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F9%2F98%2FInternational_Pok%25C3%25A9mon_logo.svg%2F2560px-International_Pok%25C3%25A9mon_logo.svg.png&imgrefurl=https%3A%2F%2Ftr.wikipedia.org%2Fwiki%2FDosya%3AInternational_Pok%25C3%25A9mon_logo.svg&tbnid=abZdna4ivxgkEM&vet=12ahUKEwjo36OW3c35AhXSnf0HHXbQBscQMygAegUIARDkAQ..i&docid=6cCOiQogoF7MNM&w=2560&h=942&q=pokemon%20logo&ved=2ahUKEwjo36OW3c35AhXSnf0HHXbQBscQMygAegUIARDkAQ" alt=""></img>
  </router-link>
   
  <router-view></router-view>
</div>

</template>

<style lang="scss">
img[role ="logo"]{
    width: 400px;
}
</style>