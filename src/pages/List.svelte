<script>
    import Header from "/src/lib/Header.svelte";
    import Footer from "/src/lib/Footer.svelte";
    import Places from "/src/lib/PlaceComponent.svelte";
    import SearchBar from "/src/lib/SearchBar.svelte";
</script>

<Header />
<main class="main">
    <h1 class="main__title">Que cherchez-vous ?</h1>
    <SearchBar />
    <div class="places__list">
        <Places />
    </div>
</main>

<Footer active="list" />
