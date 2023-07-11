<script>
  import '../../app.css';
  import Navbar from "../../components/Navbar.svelte";
</script>
<svelte:head>
<title>ZJX | VATSIM IDS</title>
</svelte:head>
<div class="topnav" id="myTopnav">
  <Navbar />
</div>
<main>
  <p class="text-center ptb-25 text-3xl">ATCTs</p>
  <div class="links">
    <div class="cards">
      <a href="/zjx/kdab" class="card">
        <h3 class="text-3xl">KDAB</h3>
        <br>
        <p class="text-2xl">Daytona Intl. ATCT</p>
      </a>
      <a href="/zjx/kmco" class="card">
        <h3 class="text-3xl">KMCO</h3>
        <br>
        <p class="text-2xl">Orlando Intl. ATCT</p>
      </a>
      <a href="/zjx/kjax" class="card">
        <h3 class="text-3xl">KJAX</h3>
        <br>
        <p class="text-2xl">Jacksonville Intl. ATCT</p>
      </a>
      <a href="/zjx/kpns" class="card">
        <h3 class="text-3xl">KPNS</h3>
        <br>
        <p class="text-2xl">Pensacola Intl. ATCT</p>
      </a>
    </div>
  </div>
  <hr>
  <p class="text-center ptb-25 text-3xl">TRACONs</p>
  <div class="links">
    <div class="cards">
      <a href="/zjx" class="card">
        <p>Coming Soon</p>
      </a>
    </div>
  </div>
</main>