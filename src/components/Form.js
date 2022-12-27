


export default function Form() {
    return (
      <>
      <div className="wrapper">
        <form action="" method="get" class="form">
          
          <div className="firstName">
            <label htmlFor="firstName">First Name </label>
            <input type="text" name="firstName" id="firstName" required />
         
            <label htmlFor="lastName">Last Name </label>
            <input type="text" name="lastName" id="lastName" required />
          </div>
  
          <div>
            <label htmlFor="email">Enter Your E-mail </label>
            <input type="email" name="email" id="email" required />
          </div>
  
        
            <input type="submit" value="Subscribe!" id="submit"/>
          
        </form>
  
  
      </div>
      
      </>
    );
  }
  