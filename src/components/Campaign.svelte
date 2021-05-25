<script>
 import Button from './Button.svelte'

 function onClick() {
  //TODO: goto campaign kitabisa
 }
</script>
<style content="text/scss">
.frame {
  position: relative;
  margin-top: 60px;
  background-color: #ffffff;
  min-width: 180px;
  width: 100%;
  max-width: 280px;
  margin-right: auto;
  margin-left: auto;
  padding: 20px;
  -webkit-transform: rotate(-1deg);
  -moz-transform: rotate(-1deg);
  -o-transform: rotate(-1deg);
  -ms-transform: rotate(-1deg);
  transform: rotate(-1deg);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
}

.tape {
  background-color: #dbd8be;
  position: absolute;
    height: 4vmin;
    top: -2rem;
    width: 80%;
    background-color: #dbd8be;
    border-right: 1px dotted #b7b49d;
    border-left: 1px dotted #b7b49d;
    opacity: 0.5;
}
.tape:after,
.tape:before {
  background-size: 0.4em 0.4em;
  bottom: 0;
  content: '';
  position: absolute;
  top: 0;
  width: 0.2em;
}
.tape:after {
  background-image: linear-gradient(45deg, transparent 50%, hsla(0, 0%, 100%, 0.3) 50%), linear-gradient(-45deg, transparent 50%, hsla(0, 0%, 100%, 0.3) 50%);
  background-position: 0 100%;
  left: -0.2em;
}
.tape:before {
  background-image: linear-gradient(135deg, transparent 50%, hsla(0, 0%, 100%, 0.3) 50%), linear-gradient(-135deg, transparent 50%, hsla(0, 0%, 100%, 0.3) 50%);
  background-position: 100% 100%;
  right: -0.2em;
}

.img-wrapper {
    position: relative;
    overflow: hidden;
    width: 100%;
    height:280px;
}
.img-wrapper img {
  position: absolute; 
  top: 0; 
  left: 0; 
  right: 0; 
  bottom: 0; 
  margin: auto; 
  min-width: 50%;
  min-height: 50%
}

.btn-campaign {
    position:absolute;
    left: 0;
    bottom: -1rem;
    width: 100%;
    text-align: center;

}

</style>

<div class="frame mb-8">
        <div class="tape"></div>
        <figure class="img-wrapper">
        <img src="https://pbs.twimg.com/media/Eq67vx3VgAAA2PM.jpg" alt="our campaign" />
        </figure>
        <h3 class="text-2xl mt-2 font-semibold mb-10">This is a header for the note</h3>
        <div class="btn-campaign">
                 <Button :on:click={onClick}>View Campaign</Button>
        </div>
      </div>