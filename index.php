<!doctype html>
<html lang="fr">
<head>
    <meta charset="utf-8" />
    <title>GAME</title>
    <link rel="stylesheet" type="text/css" href="css/index.css">
    <link rel="stylesheet" type="text/css" href="css/perso.css">
    <script src="https://google.github.io/traceur-compiler/bin/traceur.js"></script>
    <script src="https://google.github.io/traceur-compiler/bin/BrowserSystem.js"></script>
    <script src="https://google.github.io/traceur-compiler/src/bootstrap.js"></script>
    <script src="perso.js"></script>

</head>

<body>
    <div id='id_perso'></div>
    <div id="perso_panel"></div>
    <div class='small_tree obstacle' style="top: 10%; left: 50%;"></div>
    <div class='small_tree obstacle' style="top: 200px; left: 500px;"></div>
    <div class='small_tree obstacle' style="top: 200px; left: 500px;"></div>
    <div class='large_tree obstacle' style="top: 80px; left: 800px;"></div>

    <div class='large_building obstacle' style="top: 50%; left: 50%;"></div>
    <?php  require_once 'land.php'; ?>
</body>

</html>

<script src="index.js"></script>