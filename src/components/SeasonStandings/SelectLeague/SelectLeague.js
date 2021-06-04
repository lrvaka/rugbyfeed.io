import React from "react";

export default function SelectLeague({ onSelectLeague }) {
  const onChangeHandler = (e) => {
    onSelectLeague(e.target.value);
  };

  return (
    <React.Fragment>
      <select onChange={onChangeHandler}>
        <option value="0">Select competition:</option>
        {/* <option value="23210">Super Rugby NZ</option>
      <option value="23341">Super Rugby AU</option> */}
        <option value="9721">Major League Rugby</option>
        <option value="11970">Premiership Rugby</option>
        <option value="11969">Pro 14</option>
        <option value="596">Top 14</option>
        <option value="25813">Super Rugby Trans-Tasman</option>
      </select>
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      ></script>
      <ins
        class="adsbygoogle"
        style={{ display: `block` }}
        data-ad-format="fluid"
        data-ad-layout-key="-fb+5w+4e-db+86"
        data-ad-client="ca-pub-3854548660961412"
        data-ad-slot="5988072436"
      ></ins>
      <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
    </React.Fragment>
  );
}
