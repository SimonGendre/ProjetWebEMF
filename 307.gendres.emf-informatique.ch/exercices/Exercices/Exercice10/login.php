<?PHP
// test si on a reçu une donnée de formulaire nommée "username"
if (isset($_POST['username'])) { 
  
  // récupération des données transmises dans des variables locales
    $username = strtolower($_POST['username']);
    $password = $_POST['password'];
    
  // affichage des infos reçues
  echo "username: ".$username."</br>";
  echo "password: ".$password."</br>";
  // test username et mot de passe
  if (($username == "admin") && ($password == "emf123")) {
    echo "<script>alert('Validation OK');</script>";
  } else {
    echo "<script>alert('Utilisateur ou mot de passe incorrect !!!');</script>";
  }
}
?>