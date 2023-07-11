<a href="/" id="index">VATSIM IDS</a>
<a href="/keys" id="keys">Keys</a>
<a href={"#"} class="icon" on:click={myFunction}>
  <FontAwesomeIcon icon="bars" />
</a>
<script>
  import { library } from '@fortawesome/fontawesome-svg-core';
  import { faBars as fasBars } from '@fortawesome/free-solid-svg-icons';
  import { FontAwesomeIcon } from 'fontawesome-svelte';
  import { onMount } from 'svelte';
  library.add(fasBars);
  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.classList.contains("responsive")) {
      x.classList.remove("responsive");
    } else {
      x.classList.add("responsive");
    }
  }
  onMount(() => {
    let path = window.location.pathname.replace("/", "");
    if (path == "") {
      path = "index";
    }
    if (document.getElementById(path) != null) {
      document.getElementById(path).classList.remove("active");
      document.getElementById(path).className = "active";
    } else {
      document.querySelector('.active').classList.remove("active");
    }
  })
</script>
