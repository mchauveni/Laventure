<script>
    import Header from "/src/lib/Header.svelte";
    import Footer from "/src/lib/Footer.svelte";
    import SearchBar from "/src/lib/SearchBar.svelte";
    import Places from "/src/lib/PlaceComponent.svelte";
    import datas from "/src/scripts/place.json";
  
    function displayLikedPlaces() {
      const likedPlaces = JSON.parse(localStorage.getItem('places')) || [];
      const allDatas = datas.places;
      const likedPlacesIds = new Set(likedPlaces); 
      const likedPlacesList = allDatas.filter(place => likedPlacesIds.has(place.id));
      return likedPlacesList;
    }

    let value = "";
    const allDatas = datas.places;
    allDatas.forEach(data => {
        const dataName = data.name;
        const dataPlace = data.namePlace;
        (value = data.name), data.namePlace;
  });
    const likedPlacesList = displayLikedPlaces();
  </script>
  
  <Header />
  <main class="main">
    <h1 class="main__title">Vos lieux favoris</h1>
    <SearchBar />
    {#if likedPlacesList.length > 0}
    <div class="places__home">
        <Places data={likedPlacesList} />
    </div>
    {:else}
      <p>Aucun lieu favori pour le moment.</p>
    {/if} 
  </main>
  <Footer active="like" />