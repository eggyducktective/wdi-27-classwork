Vue.component('photo-result', {
  props: ['photo'],
  template: '<img @click="showDetail(photo)" :src="imageURL(photo)" :title="photo.title">',

  methods: {
    showDetail: function(photo){
      console.log('in component', photo);
    },
    imageURL: function(p){
      console.log(p);
      return `https://farm${p.farm}.staticflickr.com/${p.server}/${p.id}_${p.secret}_q.jpg`;
    }
  }
});
const app = new Vue({
  el: '#appRoot',
  data: {
    searchText: '',
    page: 1,
    results: []
  },
  methods: {

    doSearch: function(){

      $.getJSON('https://api.flickr.com/services/rest', {
      api_key: 'API key',
      method: 'flickr.photos.search',
      text: this.searchText,
      format: 'json',
      nojsoncallback: 1,
      page: this.page
    })
    .done(data => this.results = data.photos.photo)
    .fail(e => console.warn);

    }
  }
});
