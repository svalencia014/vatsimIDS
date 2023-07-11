<script>
	import { onMount } from 'svelte';
  import '../../../app.css';
  import Navbar from "../../../components/Navbar.svelte";
</script>

<svelte:head>
  <title>KDAB | VATSIM IDS</title>
</svelte:head>
<div class="topnav" id="myTopnav">
  <Navbar />
</div>
<main>
  <div id="pageHeader" class="ptb-25">
    <p class="text-center text-3xl">Daytona Beach</p>
    <a href="https://www.idszjxartcc.org/index.php?title=DAB_SOP">KDAB - ZJX SOP</a>
  </div>
  <hr>
  <div id="positions" class="ptb-25">
    <p class="text-center text-3xl">Positions</p>
    <p class="text-center text-lg pb-25">Orange are Primary</p>
    <table class="idsTable">
      <tr class="tableHeader">
        <th>Callsign</th>
        <th>Frequency</th>
        <th>ID</th>
      </tr>
      <tr class="primaryPosition">
        <td>DAB_DEL</td>
        <td>119.300</td>
        <td>5DD</td>
      </tr>
      <tr class="primaryPosition">
        <td>DAB_N_GND</td>
        <td>121.900</td>
        <td>5NG</td>
      </tr>
      <tr class="tableRow">
        <td>DAB_S_GND</td>
        <td>124.250</td>
        <td>5SG</td>
      </tr>
      <tr class="primaryPosition">
        <td>DAB_N_TWR</td>
        <td>120.700</td>
        <td>5NT</td>
      </tr>
      <tr class="tableRow">
        <td>DAB_S_TWR</td>
        <td>118.100</td>
        <td>5ST</td>
      </tr>
    </table>
  </div>
  <hr>
  <div id="departureAlt" class="ptb-25">
    <p class="text-center text-3xl pb-25">Departure Altitudes</p>
    <table class="idsTable">
      <tr class="tableHeader">
        <th>Type</th>
        <th>VFR</th>
        <th>IFR</th>
        <th>Local IFR</th>
      </tr>
      <tr class="tableRow">
        <td>Jet/Prop</td>
        <td>4000</td>
        <td>4000</td>
        <td>3000</td>
      </tr>
      <tr class="tableRow">
        <td>Piston/Heli</td>
        <td>3500</td>
        <td>3000</td>
        <td>2000</td>
      </tr>
    </table>
  </div>
  <hr>
  <div id="headings" class="ptb-25">
    <p class="text-center text-3xl">Headings</p>
    <p class="text-center text-lg pb-25"><i>For pistons only</i></p>
    <table class="idsTable">
      <tr class="tableHeader">
        <th>Runway</th>
        <th>Heading</th>
      </tr>
      <tr class="tableRow">
        <td>7L</td>
        <td>070</td>
      </tr>
      <tr class="tableRow">
        <td>7R</td>
        <td>070</td>
      </tr>
      <tr class="tableRow">
        <td>25L</td>
        <td>250</td>
      </tr>
      <tr class="tableRow">
        <td>25R</td>
        <td>250</td>
      </tr>
    </table>
  </div>
</main>