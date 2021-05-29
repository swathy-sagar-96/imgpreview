import './App.css';
import React from 'react';

 
export class App extends React.Component {
 
    state={
      profileimg:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
    }
    imageHandler=(e)=>{
      const reader=new FileReader();
      reader.onload=()=>{
        if(reader.readyState===2){
          this.setState({profileimg: reader.result})
        }
      }
      reader.readAsDataURL(e.target.files[0])
    };
 
    
 
    render() {
      const {profileimg}=this.state
        return (
            <div>
              <div className='page'>
                <div className='container'>
                  <h1 className='heading'>Add your image..</h1>
                  <div className='img-holder'>
                    <img src={profileimg} alt="" id="img" className="img"/>
                  </div>
                  <input type="file" name="image-upload" id="input" accept="image/*" onChange={this.imageHandler}/>
                  <div className="label">
                    <label htmlFor="input" className="image-upload">
                      <i className="material-icons">add_photo_alternate</i>
                      Choose your photo
                    </label>
                  </div>
                </div>
              </div>
            </div>
        );
    }
}
export default App