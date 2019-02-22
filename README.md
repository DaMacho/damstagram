# damstagram   

Cloning Instagram with Python Django and React / React Native   

[requires]    
python_version = "3.6"

[Current env-setup]     
django = "2.0"
postgresql = "9.6"

initial setup by **cookiecutter**   

pipenv
> pipenv --three   
> pipenv install <package name>   
> pipenv shell  // into the virtualenv. Enter "exit" to exit.   


<!-- in local, Dev -->
<!-- 
Django is on port:8000,
React is on port:3000.

Will make React to look up port:8000, if React doesn't find from itself.
 -->

 <!-- in server, Production -->
 <!-- 
 User will go to port 8000,
 and will be connected React to port 8000 from build of React.
  -->