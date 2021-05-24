<script>
  import Button from './Button.svelte';

  function handleClick() {
		  window.location.href = "mailto:talk@munaqadh.org";
  }
</script>



<div class="flex flex-col justify-center items-center">
  <img src="images/illus__want_to_talk.png" alt="illustration want to talk"  width="240"/>
  <Button on:click={handleClick}>Lets Talk!</Button>
</div>