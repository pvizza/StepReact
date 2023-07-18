const SideComponent = () => {
  return (
    <section style={{ flexGrow: 1 , backgroundColor: '#483eff', margin: '12px', borderRadius: '3%'}} className="side-component">
      <div>
        <span>step 1</span>
        <p>YOUR INFO</p>
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
    </section>
  );
}

export default SideComponent;