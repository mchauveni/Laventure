<script>
    import Header from "/src/lib/Header.svelte";
    import Footer from "/src/lib/Footer.svelte";
    import SearchBar from "/src/lib/SearchBar.svelte";
</script>

<Header />
<main class="main">
    <h1 class="main__title">Vos lieux favoris</h1>
    <SearchBar />
</main>
<Footer active="like" />
