import React, {Component} from 'react';  
import './App.css'; 
import Alert from './Components/Alert';
import Media from './Components/Media';    
  
class App extends Component {  
  constructor(){
    super();  
    this.state = {  
      type: "danger",  
      header: "Fatal Error",  
      content: "ini content dari alert"  
    }  
  }  

  render(){  
    return (

     // <div className="App">  
     //   <h3>Ini Project Pertama React JS</h3>  
     //   <p>Belajar React JS itu mudah</p>  
     // </div>

    //<div className="App">
    //  <h3 className="judul">Ini Project Pertama React JS</h3>
    //  <p className="subJudul">Belajar React JS itu mudah</p>
    //</div>
 
    //<div className="App container">  
    //<div className="alert alert-info">  
      //<h3 className="text-danger">Ini Project Pertama React JS</h3>  
      //<p>Belajar React JS itu mudah</p>  
      //<button className="mr-1 btn btn-success">Setuju</button>  
      //<button className="btn btn-info">Iya Dong</button>
 
      //<div className="alert alert-success">  
      //<h4>Info</h4>  
      //Belajar React JS itu menyenangkan  
      //</div>
      
      // <div className="App container col-sm-6">
      //   <Alert />
      //   < Alert />
      //   < Alert />
      // </div>

      // <div className = "App container col-sm-6">
      //   <Alert type="danger" header="Fatal Error">
      //     Ini adalah alert dengan tipe danger
      //   </Alert>
      //   <Alert type="success" header="Berhasil">
      //     Ini adalah alert dengan tipe success
      //   </Alert>
      //   <Alert type="warning" header="Warning">
      //     Ini adalah alert dengan tipe warning
      //   </Alert>
      // </div>

      // <div className="container">
      //   <Media image="image/logo192.png"
      //   title = "React JS"
      //   type = "info">
      //     Framework untuk Frontend Development
      //   </Media>
      //   <Media image="image/logo512.png" title="Node JS" type="success">
      //     Framework untuk Backend Development
      //   </Media>
      // </div>


      <div>  
      <Alert type={this.state.type} header={this.state.header}>  
          {this.state.content}  
      </Alert>
    <hr />  
      <h4>Alert Control</h4>  
        <b className="text-left">Tipe Alert</b>  
        <select className="form-control" name="type" value={this.state.type}  
          onChange={this.changeTypeAlert}>  
            <option value="success">Success</option>  
            <option value="warning">Warning</option>  
            <option value="danger">Danger</option>  
            <option value="info">Info</option>  
        </select>  
      <b className="text-left">Header Alert</b>  
      <input  
          type="text" name="header" className="form-control" value={this.state.header}  
          onChange={this.changeHeaderAlert} />  
        <b className="text-left">Content Alert</b>  
      <input  
        type="text" name="content" className="form-control" value={this.state.content}  
        onChange={this.changeContentAlert} />
        </div> 
    ); 
  } 
}  
  
export default App; 
