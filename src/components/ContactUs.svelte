<script>
import { onMount } from "svelte";

  import "wired-elements";

  function handleClick() {
		  window.location.href = "mailto:talk@munaqadh.org";
  }
</script>

<div class="flex flex-col justify-center items-center">
  <img src="images/illus__want_to_talk.png" alt="illustration want to talk" />
  <wired-button on:click={handleClick}>Lets Talk!</wired-button>
</div>