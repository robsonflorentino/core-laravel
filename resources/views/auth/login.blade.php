@extends('layouts/login_template')

@section('content')
<div class="login-box">
        <div class="login-logo">
          <a href="/"><b>Admin</b>LTE</a>
        </div><!-- /.login-logo -->
        <div class="login-box-body">

          <p class="login-box-msg">Sign in to start your session</p>

          <form action="login" method="post">

            {!! csrf_field() !!}

            <div class="form-group has-feedback">
              <input type="text" name="username" id="username" class="form-control" placeholder="Username" value="{{ old('username') }}" />
              <span class="glyphicon glyphicon-user form-control-feedback"></span>
            </div>

            <div class="form-group has-feedback">
              <input type="password" name="password" id="password" class="form-control" placeholder="Password" />
              <span class="glyphicon glyphicon-lock form-control-feedback"></span>
            </div>

            <div class="row">
              <div class="col-sm-8 ">
                <div class="checkbox icheck form-group">
                  <label>
                    <input id="remember" name="remember" type="checkbox"> Remember Me
                  </label>
                </div>
              </div><!-- /.col -->
              <div class="col-xs-4">
                <button type="submit" class="btn btn-primary btn-block btn-flat">Sign In</button>
              </div><!-- /.col -->
            </div>
          </form>

          <div clas="row">&nbsp;</div>        
          <a href="register" class="text-center">Register a new membership</a><br>

        </div><!-- /.login-box-body -->
      </div>
@stop