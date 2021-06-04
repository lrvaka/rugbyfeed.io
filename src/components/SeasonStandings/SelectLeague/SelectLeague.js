export default function SelectLeague({ onSelectLeague }) {
  const onChangeHandler = (e) => {
    onSelectLeague(e.target.value);
  };

  return (
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
  );
}
