@extends('layouts/login_template')

@section('content')
<div class="login-box">
    
    <div class="login-logo">
      <a href="/"><b>Admin</b>LTE</a>
    </div><!-- /.login-logo -->
    
    <div class="login-box-body">

      <p class="login-box-msg">Member register</p>

        <form method="POST" action="/auth/register">
          {!! csrf_field() !!}  
            
          <div class="form-group">
            <label for="name">Name:</label>
            <input type="text" class="form-control" name="name" id="name">
          </div>
          
          <div class="form-group">
            <label for="username">Username:</label>
            <input type="text" class="form-control" name="username" id="username">
          </div>
            
          <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" class="form-control" name="email" id="email">
          </div>
            
          <div class="form-group">
            <label for="password">Password:</label>
            <input type="password" class="form-control" name="password" id="password">
          </div>
          
            
          <div class="form-group">
            <label for="password_confirmation">Confirm Password:</label>
            <input type="password" class="form-control" name="password_confirmation" id="password_confirmation">
          </div>  
            
         
          <div class="row">
              <div class="col-sm-8 ">
              </div><!-- /.col -->
              <div class="col-xs-4">
                <button type="submit" class="btn btn-primary btn-block btn-flat">Register</button>
              </div><!-- /.col -->
            </div>
          
        </form>
      
        <div clas="row">&nbsp;</div>        
        <a href="login" class="text-center">Cancel register a member.</a><br>
      
    </div><!-- /.login-box-body -->
</div>
@stop