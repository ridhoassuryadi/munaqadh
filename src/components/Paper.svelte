<script>
import ContactUs from './ContactUs.svelte'
import Footer from './Footer.svelte'
import Campaign from './Campaign.svelte'
</script>
<style type="text/scss">

#notebook-paper {
  width: 100%;
  max-width:980px;
  height:2309px;
  background: linear-gradient(to bottom,white 31px,#00b0d7 1px);
  margin:0 auto;
  background-size: 100% 32px;
  position:relative;
  padding-top:150px;
  padding-left:44px;
  padding-right:12px;
  overflow:hidden;
  border-radius:5px;
  -webkit-box-shadow:3px 3px 3px rgba(0,0,0,.2),0px 0px 6px rgba(0,0,0,.2);
  -moz-box-shadow:3px 3px 3px rgba(0,0,0,.2),0px 0px 6px rgba(0,0,0,.2);
  -ms-box-shadow:3px 3px 3px rgba(0,0,0,.2),0px 0px 6px rgba(0,0,0,.2);
  -o-box-shadow:3px 3px 3px rgba(0,0,0,.2),0px 0px 6px rgba(0,0,0,.2);
  box-shadow:3px 3px 3px rgba(0,0,0,.2),0px 0px 6px rgba(0,0,0,.2);
  &:before {
    content:'';
    display:block;
    position:absolute;
    z-index:1;
    top:0;
    left:32px;
    height:100%;
    width:1px;
    background:#db4034;
  }
  header {
    height:150px;
    width:100%;
    background:white;
    position:absolute;
    top:0;
    left:0;
    h1 {
      @apply text-4xl font-semibold;
      padding:7.2rem 2rem 0 2.75rem;
    }
  }
  #content {
    margin-top:1.25rem;
    p {
      margin:0 0 30px 0;
    }

    img {
        margin: 0 auto;
    }
  }
}

@media (min-width: 768px) {
    #notebook-paper {
        padding-left:172px;
        padding-right:32px;

         &:before {
           left: 140px;
         }

         header {
            height:11rem;
             h1 {
                 @apply text-5xl;
                 padding:9rem 2rem 0 10.75rem;
             }
         }

         #content {
             margin-top: 3.125rem;
         }
    }
}
</style>


<div id="notebook-paper">
  <header>
    <h1>Fancy Title</h1>
  </header>
  <div id="content">
    <div class="hipsum">
    <p>Intelligentsia lo-fi pug Austin.  Shabby chic asymmetrical jean shorts, 
    twee stumptown bespoke art party keffiyeh High Life PBR 90's mumblecore.  Meggings Echo Park narwhal you probably haven't heard of them,
    viral locavore Pinterest keytar.  Master cleanse Neutra Marfa cornhole roof party, seitan ennui Kickstarter fingerstache.</p>
    <img src="images/photo__hello.png" alt="hello from us!" width="503"/>
    <p>Forage selfies Shoreditch farm-to-table swag.
      YOLO Vice organic, Brooklyn meggings banh mi art party.  Occupy flexitarian freegan mustache shabby chic hoodie normcore.  Vinyl chia gastropub, asymmetrical fingerstache sartorial ennui aesthetic hella farm-to-table Blue Bottle.  Raw denim cliche semiotics, letterpress bicycle rights cornhole art party YOLO yr Shoreditch leggings brunch fap crucifix.  Gentrify mustache leggings ethnic roof party, 
      shabby chic viral Wes Anderson 3 wolf moon Tonx ugh sustainable photo booth master cleanse meggings. 
       Shoreditch before they sold out direct trade  hoodie, 
       leggings Portland artisan art party.</p>
       <Campaign />
       <p>VHS jean shorts Neutra gastropub cornhole, mumblecore Wes Anderson typewriter Godard bitters 3 wolf moon Odd Future tofu tousled plaid.  Tonx Etsy tofu, distillery retro blog Blue Bottle ugh kale chips flexitarian Odd Future sartorial Banksy bitters.  Messenger bag XOXO sustainable viral semiotics Williamsburg, whatever gastropub hashtag master cleanse.  Fap Williamsburg Blue Bottle, yr flannel biodiesel XOXO YOLO freegan pour-over farm-to-table leggings.  Ethical Thundercats umami gluten-free fingerstache.  DIY Etsy disrupt PBR.  Shabby chic sriracha synth Pinterest Marfa aesthetic dreamcatcher salvia,
        trust fund cliche Brooklyn.</p>

        <p>Master cleanse Neutra Marfa cornhole roof party, seitan ennui Kickstarter fingerstache.  Ethical tofu retro, paleo.</p>
        <ContactUs />
    </div>
  </div>
  <Footer />
</div>

