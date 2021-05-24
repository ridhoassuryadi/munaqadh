<script>
   import Paper from './components/Paper.svelte'

   console.log(document.querySelector('wired-button'))
</script>

<style type="text/scss">
$bg-red: red;

h1 {
  color: $bg-red;
}
</style>

<main id="App" class="md:py-16">
    <Paper />
</main>