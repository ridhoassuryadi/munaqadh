
<style>
button {
    border-bottom-left-radius: 15px 255px;
    border-bottom-right-radius: 225px 15px;
    border-top-left-radius: 255px 15px;
    border-top-right-radius: 15px 225px;
    transition: all 235ms ease 0s;
    box-shadow: 15px 28px 25px -18px rgb(0 0 0 / 20%);
    transition: all 235ms ease-in-out 0s;
    color: #41403e;
    background-color: white;
    align-self: center;
    background-image: none;
    border: 2px solid #41403e;
    cursor: pointer;
    display: inline-block;
    font-size: 1rem;
    outline: none;
    padding: .75rem;
    font-weight: 600;
}
</style>

<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  	function onClick(e) {
		dispatch('click', e);
	}
</script>

<button on:click={onClick}><slot/></button>