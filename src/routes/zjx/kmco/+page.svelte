<script>
  import '../../../app.css';
  import Navbar from "../../../components/Navbar.svelte";
  import Footer from '../../../components/Footer.svelte';
</script>
<svelte:head>
  <title>KMCO | VATSIM IDS</title>
</svelte:head>
<div class="topnav" id="myTopnav">
  <Navbar />
</div>
<main>
  <div id="pageHeader" class="ptb-25">
    <p class="text-center text-3xl">Orlando Intl.</p>
    <a href="https://www.idszjxartcc.org/index.php?title=MCO_SOP" class="text-center db">KMCO - ZJX SOP</a>
  </div>
  <hr>
  <div id="positons" class="ptb-25">
    <p class="text-center text-3xl">Positions</p>
    <p class="text-center text-lg pb-25">Orange are Primary</p>
    <table class="idsTable">
      <tr class="tableHeader">
        <th>Callsign</th>
        <th>Frequency</th>
        <th>ID</th>
      </tr>
      <tr class="primaryPosition">
        <td>MCO_DEL</td>
        <td>134.700</td>
        <td>4OD</td>
      </tr>
      <tr class="primaryPosition">
        <td>MCO_W_GND</td>
        <td>121.800</td>
        <td>4WG</td>
      </tr>
      <tr class="tableRow">
        <td>MCO_E_GND</td>
        <td>126.400</td>
        <td>4EG</td>
      </tr>
      <tr class="primaryPosition">
        <td>MCO_E_TWR</td>
        <td>118.450</td>
        <td>4ET</td>
      </tr>
      <tr class="tableRow">
        <td>MCO_W_TWR</td>
        <td>124.300</td>
        <td>4WT</td>
      </tr>
    </table>
  </div>
  <hr>
  <div id="departureAlt" class="ptb-25">
    <p class="text-center text-3xl pb-25">Departure Altitudes</p>
    <table class="idsTable">
      <tr class="tableHeader">
        <th>Departure</th>
        <th>Altitude</th>
      </tr>
      <tr class="tableRow">
        <td>CITR#</td>
        <td>2000</td>
      </tr>
      <tr class="tableRow">
        <td>ORLA#</td>
        <td>7000</td>
      </tr>
      <tr class="tableRow">
        <td>OTHER</td>
        <td>Climb Via Sid</td>
      </tr>
    </table>
  </div>
  <hr>
  <div id="departureRwy" class="ptb-25">
    <p class="text-center text-3xl pb-25">Departure Runways</p>
    <table class="idsTable">
      <tr class="tableHeader">
        <td>18L/R | 36L/R</td>
        <td>17L/R | 35L/R</td>
      </tr>
      <tr class="tableRow">
        <td>OSPRI#</td>
        <td>DDANY#</td>
      </tr>
      <tr class="tableRow">
        <td>FSHUN#</td>
        <td>FATHE#</td>
      </tr>
      <tr class="tableRow">
        <td>RDSOX#</td>
        <td>MZULO#</td>
      </tr>
      <tr class="tableRow">
        <td>JEEMY#</td>
        <td>WORMS</td>
      </tr>
      <tr class="tableRow">
        <td>MICKI#</td>
        <td>ATLAS</td>
      </tr>
      <tr class="tableRow">
        <td>KLMAN</td>
        <td>TPSTR</td>
      </tr>
      <tr class="tableRow">
        <td>CAMAN</td>
        <td></td>
      </tr>
    </table>
  </div>
  <hr>
  <div id="headings" class="ptb-25 cards flexdiv">
    <div class="cards">
      <div class="nocard">
        <p class="text-center text-3xl pb-25">CITR Headings</p>
        <table class="idsTable">
          <tr class="tableHeader">
            <th>DTA</th>
            <th>HDG</th>
          </tr>
          <tr class="tableRow">
            <td>CAMAN</td>
            <td>270</td>
          </tr>
          <tr class="tableRow">
            <td>KLMAN</td>
            <td>270</td>
          </tr>
          <tr class="tableRow">
            <td>KNEED</td>
            <td>270</td>
          </tr>
          <tr class="tableRow">
            <td>TPSTR</td>
            <td>090</td>
          </tr>
          <tr class="tableRow">
            <td>WORMS</td>
            <td>270</td>
          </tr>
        </table>
      </div>
      <div class="nocard">
        <p class="text-center text-3xl pb-25">ORLA North Headings</p>
        <table class="idsTable">
          <tr class="tableHeader">
            <th>DTA</th>
            <th>RWY</th>
            <th>HDG</th>
          </tr>
          <tr class="tableRow">
            <td>CAMAN</td>
            <td>ALL</td>
            <td>345-010</td>
          </tr>
          <tr class="tableRow">
            <td>ATLAS</td>
            <td>ALL</td>
            <td>060</td>
          </tr>
          <tr class="tableRow">
            <td>WORMS/MICKI</td>
            <td>36L/R</td>
            <td>010</td>
          </tr>
          <tr class="tableRow">
            <td>WORMS/MICKI</td>
            <td>35L/R</td>
            <td>025-035</td>
          </tr>
          <tr class="tableRow">
            <td>KLMAN</td>
            <td>ALL</td>
            <td>345-010</td>
          </tr>
        </table>
      </div>
      <div class="nocard">
        <p class="text-center text-3xl pb-25">ORLA South Headings</p>
        <table class="idsTable">
          <tr class="tableHeader">
            <th>DTA</th>
            <th>RWY</th>
            <th>HDG</th>
          </tr>
          <tr class="tableRow">
            <td>CAMAN/KLMAN</td>
            <td>18L/R</td>
            <td>205</td>
          </tr>
          <tr class="tableRow">
            <td>CAMAN/KLMAN</td>
            <td>17L/R</td>
            <td>220</td>
          </tr>
          <tr class="tableRow">
            <td>ATLAS/WORMS/MICKI</td>
            <td>18L/18R</td>
            <td>140</td>
          </tr>
          <tr class="tableRow">
            <td>ATLAS/WORMS/MICKI</td>
            <td>17L/17R</td>
            <td>160</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
  <hr>
  <div id="rnav" class="ptb-25 cards flexdiv">
    <div class="nocard">
      <p class="text-center text-3xl pb-25">RNAV North Ops</p>
      <table class="idsTable">
        <tr class="tableHeader">
          <th>SID</th>
          <th>RWY</th>
          <th>FIX</th>
        </tr>
        <tr class="tableRow">
          <td>MZULO/DDANY</td>
          <td>ALL</td>
          <td>GOHOM</td>
        </tr>
        <tr class="tableRow">
          <td>ALL</td>
          <td>36L</td>
          <td>KYOTE</td>
        </tr>
        <tr class="tableRow">
          <td>ALL</td>
          <td>36R</td>
          <td>FACTS</td>
        </tr>
        <tr class="tableRow">
          <td>FATHE/JEEMY</td>
          <td>35L/R</td>
          <td>JWOLF</td>
        </tr>
        <tr class="tableRow">
          <td>RDSOX/OSPRI/FSHUN</td>
          <td>35L/R</td>
          <td>SAWZZ</td>
        </tr>
      </table>
    </div>
    <div class="nocard">
      <p class="text-center text-3xl pb-25">RNAV South Ops</p>
      <table class="idsTable">
        <tr class="tableHeader">
          <th>SID</th>
          <th>RWY</th>
          <th>FIX</th>
        </tr>
        <tr class="tableRow">
          <td>RDSOX/OSPRI</td>
          <td>ALL</td>
          <td>VILNS</td>
        </tr>
        <tr class="tableRow">
          <td>FSHUN</td>
          <td>ALL</td>
          <td>BAAIT</td>
        </tr>
        <tr class="tableRow">
          <td>MZULO/DDANY</td>
          <td>ALL</td>
          <td>KAAPE</td>
        </tr>
        <tr class="tableRow">
          <td>FATHE/JEEMY</td>
          <td>18R/L</td>
          <td>VILNS</td>
        </tr>
        <tr class="tableRow">
          <td>FATHE/JEEMY</td>
          <td>17R/L</td>
          <td>KAAPE</td>
        </tr>
      </table>
    </div>
  </div>
</main>
<footer>
  <div class="footer text-center">
    <Footer user="svalencia014" name="Samuel V."/>
  </div>
</footer>