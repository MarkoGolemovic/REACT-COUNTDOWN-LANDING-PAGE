import validator from 'validator';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import React, { Component } from 'react';
import Button from 'react-validation/build/button';


const email = (value) => {
  if (!value.toString().trim().length) {
    // We can return string or jsx as the 'error' prop for the validated Component
    return 'require';
  }  
  
  if (!validator.isEmail(value)) {
      return `${value} is not a valid email.`
    }
  };

  export class validation extends Comment{
    
    required (value) {
      if (!value.toString().trim().length) {
        // We can return string or jsx as the 'error' prop for the validated Component
        return 'require';
      }
    };
    
      render(){
        return <Form>
            <h3>Login</h3>
            <div>
                <label>
                    Email*
                    <Input value='email@email.com' name='email' validations={[this.required, email]}></Input>
                </label>
            </div>
            
            <div>
                <Button>Submit</Button>
            </div>
        </Form>;
  }

  
 
}