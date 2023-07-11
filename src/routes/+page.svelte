<script>
  import '../app.css';
  import Navbar from "../components/Navbar.svelte";
</script>
<svelte:head>
<title>Home | VATSIM IDS</title>
</svelte:head>
<div class="topnav" id="myTopnav">
  <Navbar />
</div>
<main>
  <p class="text-center ptb-50 text-3xl">Select a facility to get started</p>
  <div class="links">
    <div class="cards">
      <a href="/zjx" class="card text-2xl">
        <h3>ZJX</h3>
      </a>
      <a href="/zhu" class="card text-2xl">
        <h3>ZHU</h3>
      </a>
    </div>
  </div>
</main>