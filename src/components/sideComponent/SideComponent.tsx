const SideComponent = () => {
  return (
    <section style={{ flexGrow: 1, backgroundColor: '#483eff', margin: '12px', borderRadius: '3%' }} className="side-component">
    <div style={{ display: 'grid', gridTemplateColumns: 'auto', gridGap: '8px'}}>
      <div style={{display: 'grid', gridTemplateColumns: '1fr 2fr'}}>
        <div>
        <p style={{alignSelf:'center', justifySelf:'center'}}>1</p>
        </div>
        <div>
        <span>step 1</span>
        <p>YOUR INFO</p>
        </div>
      </div>
      <div>
        <span>step 2</span>
        <p>SELECT PLAN</p>
      </div>
      <div>
        <span>step 3</span>
        <p>ADD-ONS</p>
      </div>
      <div>
        <span>step 4</span>
        <p>SUMMARY</p>
      </div>
    </div>
  </section>
  );
}

export default SideComponent;