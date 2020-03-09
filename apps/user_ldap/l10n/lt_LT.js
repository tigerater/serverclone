OC.L10N.register(
    "user_ldap",
    {
    "Failed to clear the mappings." : "Nepavyko išvalyti sąsajų.",
    "Failed to delete the server configuration" : "Nepavyko pašalinti serverio konfigūracijos",
    "Invalid configuration: Anonymous binding is not allowed." : "Neteisinga konfigūracija: Anoniminis prisijungimas neleidžiamas.",
    "Valid configuration, connection established!" : "Konfigūracija teisinga, ryšys užmegztas!",
    "Valid configuration, but binding failed. Please check the server settings and credentials." : "Konfigūracija teisinga, bet prisijungimas nepavyko. Patikrinkite serverio nustatymus ir prisijungimo duomenis.",
    "Invalid configuration. Please have a look at the logs for further details." : "Neteisinga konfigūracija. Išsamesnei informacijai, žiūrėkite žurnalus.",
    "No action specified" : "Nenurodytas veiksmas",
    "No configuration specified" : "Nenurodyta jokia konfigūracija",
    "No data specified" : "Nepateikta duomenų",
    " Could not set configuration %s" : "Nepavyko nustatyti konfigūracijos %s",
    "Action does not exist" : "Veiksmo nėra",
    "Renewing …" : "Atnaujinama ...",
    "Very weak password" : "Labai silpnas slaptažodis",
    "Weak password" : "Silpnas slaptažodis",
    "So-so password" : "Neblogas slaptažodis",
    "Good password" : "Geras slaptažodis",
    "Strong password" : "Stiprus slaptažodis",
    "The Base DN appears to be wrong" : "Neteisinga DN šaka ",
    "Testing configuration…" : "Išbandoma konfigūracija…",
    "Configuration incorrect" : "Konfigūracija neteisinga",
    "Configuration incomplete" : "Nepilna konfigūracija",
    "Configuration OK" : "Konfigūracija gera",
    "Select groups" : "Pasirinkti grupes",
    "Select object classes" : "Pasirinkite objektų klases",
    "Please check the credentials, they seem to be wrong." : "Patikrinkite prisijungimo duomenis, jie atrodo neteisingi.",
    "Please specify the port, it could not be auto-detected." : "Prašome nurodyti prievadą, jo nepavyko aptikti automatiškai.",
    "Base DN could not be auto-detected, please revise credentials, host and port." : "Negalima automatiškai nustatyti DN šakos, peržiūrėkite prisijungimo duomenis, serverį ir prievadus.",
    "Could not detect Base DN, please enter it manually." : "Nepavyko aptikti DN šakos, įrašykite rankiniu būdu. ",
    "{nthServer}. Server" : "{nthServer}. Serveris",
    "No object found in the given Base DN. Please revise." : "Jokie objektai nurodytoje DN šakoje nerasti. Prašome patikslinkite.",
    "More than 1,000 directory entries available." : "Yra prieinama daugiau nei 1000 katalogo įrašų. ",
    "An error occurred. Please check the Base DN, as well as connection settings and credentials." : "Įvyko klaida.  Patikrinkite DN šąką, taip pat sujungimo nustatymus ir prisijungimo duomenis.",
    "Do you really want to delete the current Server Configuration?" : "Ar tikrai norite ištrinti dabartinę serverio konfigūraciją?",
    "Confirm Deletion" : "Patvirtinkite ištrynimą",
    "Mappings cleared successfully!" : "Susiejimai pašalinti sėkmingai!",
    "Error while clearing the mappings." : "Klaida šalinant susiejimus.",
    "Anonymous bind is not allowed. Please provide a User DN and Password." : "Anoniminis prisijungimas neleidžiamas. Pateikite naudotojo DN ir slaptažodį.",
    "LDAP Operations error. Anonymous bind might not be allowed." : "LDAP veikimo klaida. Anoniminis prisijungimas gali būti neleistinas.",
    "Saving failed. Please make sure the database is in Operation. Reload before continuing." : "Nepavyko išsaugoti. Įsitikinkite, kad duomenų bazė veikia. Prieš tęsdami - perkraukite.",
    "Switching the mode will enable automatic LDAP queries. Depending on your LDAP size they may take a while. Do you still want to switch the mode?" : "Režimo pakeitimas įjungs automatines LDAP užklausas. Priklausomai nuo LDAP dydžio tai gali užtrukti. Ar tikrai norite pakeisti režimą?",
    "Mode switch" : "Veiksenos pakeitimas",
    "Select attributes" : "Pasirinkite požymius",
    "User not found. Please check your login attributes and username. Effective filter (to copy-and-paste for command-line validation): <br/>" : "Naudotojas nerastas. Patikrinkite savo prisijungimo požymius ir naudotojo vardą. Veiksmingas filtras (skirtas nukopijuoti ir įdėti komandinų eilutės patvirtinimui): <br/>",
    "User found and settings verified." : "Naudotojas surastas, nustatymai patikrinti.",
    "Consider narrowing your search, as it encompassed many users, only the first one of whom will be able to log in." : "Apsvarstykite galimybę susiaurinti paiešką, nes ji apima daug naudotojų, ir tik pirmasis iš jų galės prisijungti.",
    "An unspecified error occurred. Please check log and settings." : "Įvyko nenustatyta klaida. Patikrinkite žurnalo įrašus ir nustatymus.",
    "The search filter is invalid, probably due to syntax issues like uneven number of opened and closed brackets. Please revise." : "Paieškos filtras netinkamas, greičiausiai dėl sintaksės problemų, tokių kaip nevienodas atidarytų ir uždarų skliaustų skaičius. Prašome patikrinkite.",
    "A connection error to LDAP / AD occurred, please check host, port and credentials." : "Įvyko sujungimo su LDAP/ AD klaida, patikrinkite serverį, prievadus ir prisijungimo duomenis.",
    "The \"%uid\" placeholder is missing. It will be replaced with the login name when querying LDAP / AD." : "Trūksta \"%u\" vietaženklio. Jis bus pakeistas prisijungimo vardu, siunčiant užklausas LDAP / AD. ",
    "Please provide a login name to test against" : "Pateikite prisijungimo vardą, kurį norite patikrinti",
    "Password change rejected. Hint: " : "Slaptažodžio keitimas atmestas. Patarimas: ",
    "Please login with the new password" : "Prisijunkite su nauju slaptažodžiu",
    "Your password will expire tomorrow." : "Jūsų slaptažodžio galiojimo laikas pasibaigs rytoj.",
    "Your password will expire today." : "Jūsų slaptažodžio galiojimo laikas baigiasi šiandien.",
    "_Your password will expire within %n day._::_Your password will expire within %n days._" : ["Jūsų slaptažodis nustos galioti po %n dienos.","Jūsų slaptažodis nustos galioti po %n dienų.","Jūsų slaptažodis nustos galioti po %n dienų.","Jūsų slaptažodis nustos galioti po %n dienos."],
    "LDAP / AD integration" : "LDAP / AD integracija",
    "_%s group found_::_%s groups found_" : ["Rasta %s grupė","Rastos %s grupės","Rasta %s grupių","Rasta %s grupė"],
    "_%s user found_::_%s users found_" : ["Rastas %s naudotojas","Rasti %s naudotojai","Rasta %s naudotojų","Rasta %s naudotojų"],
    "Could not detect user display name attribute. Please specify it yourself in advanced LDAP settings." : "Nepavyko aptikti naudotojo rodomo vardo požymio. Nurodykite jį patys išplėstiniuose LDAP nustatymuose.",
    "Could not find the desired feature" : "Nepavyko rasti pageidaujamos ypatybės",
    "Invalid Host" : "Neteisingas serveris",
    "Test Configuration" : "Bandyti konfigūraciją",
    "Help" : "Pagalba",
    "Groups meeting these criteria are available in %s:" : "Grupės atitinkančios šiuos kriterijus yra pasiekiamos %s :",
    "Only these object classes:" : "Tik šios objektų klasės:",
    "Only from these groups:" : "Tik iš šių grupių:",
    "Search groups" : "Ieškoti grupių",
    "Available groups" : "Prieinamos grupės",
    "Selected groups" : "Pasirinktos grupės",
    "Edit LDAP Query" : "Taisyti LDAP užklausą",
    "LDAP Filter:" : "LDAP filtras:",
    "The filter specifies which LDAP groups shall have access to the %s instance." : "Filtras nurodo, kurios LDAP grupės turi turėti prieigą prie %s",
    "Verify settings and count the groups" : "Patikrinkite nustatymus ir suskaičiuokite grupes",
    "When logging in, %s will find the user based on the following attributes:" : "Prisijungiant, %s suras naudotoją, remiantis šiais požymiais:",
    "LDAP / AD Username:" : "LDAP / AD naudotojo vardas:",
    "LDAP / AD Email Address:" : "LDAP / AD el. pašto adresas:",
    "Other Attributes:" : "Kiti požymiai:",
    "Defines the filter to apply, when login is attempted. \"%%uid\" replaces the username in the login action. Example: \"uid=%%uid\"" : "Apibrėžia filtrą, kuris taikomas bandant prisijungti. \"%%uid\" pakeičia naudotojo vardą prisijungimo metu. Pavyzdys: \"uid=%%uid\"",
    "Test Loginname" : "Ištestuokite prisijungimo vardą",
    "Verify settings" : "Patikrinti nustatymus",
    "%s. Server:" : "%s. Serveris:",
    "Add a new configuration" : "Pridėti naują konfigūraciją",
    "Copy current configuration into new directory binding" : "Nukopijuokite dabartinę konfigūraciją į naują katalogų saistymą",
    "Delete the current configuration" : "Ištrinti esamą konfigūraciją",
    "Host" : "Serveris",
    "You can omit the protocol, unless you require SSL. If so, start with ldaps://" : "Jūs galite praleisti protokolą, nebent Jums reikalingas SSL. Jei taip, pradėkite su ldaps://",
    "Port" : "Prievadas",
    "Detect Port" : "Aptikti prievadą",
    "User DN" : "Naudotojo DN",
    "The DN of the client user with which the bind shall be done, e.g. uid=agent,dc=example,dc=com. For anonymous access, leave DN and Password empty." : "Kliento naudotojo DN, kuris turi būti naudojamas prisijungimui, pvz.: uid=agent,dc=example,dc=com. Anonimiškam prisijungimui palikite DN ir slaptažodį tuščius.",
    "Password" : "Slaptažodis",
    "For anonymous access, leave DN and Password empty." : "Anoniminei prieigai, palikite DN ir Slaptažodžio laukus tuščius.",
    "One Base DN per line" : "Viena DN šaka vienoje eilutėje",
    "Detect Base DN" : "Aptikti DN šaką",
    "Test Base DN" : "Testuoti DN šaką",
    "Avoids automatic LDAP requests. Better for bigger setups, but requires some LDAP knowledge." : "Vengia automatinių LDAP užklausų. Geriau tinka didesniems nustatymams, bet reikalingos LDAP žinios.",
    "Manually enter LDAP filters (recommended for large directories)" : "Ranka įveskite LDAP filtrus (rekomenduojama dideliems katalogams)",
    "Listing and searching for users is constrained by these criteria:" : "Naudotojų paieška ir sąrašo pateikimas yra sukonstruota remiantis šiais kriterijais:",
    "The most common object classes for users are organizationalPerson, person, user, and inetOrgPerson. If you are not sure which object class to select, please consult your directory admin." : "Dažniausios objektų klasės vartotojams yra organizationalPerson, person, user, and inetOrgPerson. Jei nežinote, kurią objektų klasę pasirinkti susisiekite su administratoriumi.",
    "The filter specifies which LDAP users shall have access to the %s instance." : "Filtras nurodo, kurie LDAP naudotojai turi turėti prieigą prie %s.",
    "Verify settings and count users" : "Patikrinkite nustatymus ir suskaičiuokite naudotojus",
    "Saving" : "Įrašoma",
    "Back" : "Atgal",
    "Continue" : "Tęsti",
    "Please renew your password." : "Prašome atnaujinkite savo slaptažodį.",
    "An internal error occurred." : "Įvyko vidinė klaida.",
    "Please try again or contact your administrator." : "Bandykite dar kartą arba susisiekite su savo administratoriumi.",
    "Current password" : "Dabartinis slaptažodis",
    "New password" : "Naujas slaptažodis",
    "Renew password" : "Atnaujintas slaptažodis",
    "Wrong password." : "Neteisingas slaptažodis.",
    "Cancel" : "Atsisakyti",
    "Server" : "Serveris",
    "Users" : "Naudotojai",
    "Login Attributes" : "Prisijungimo požymiai",
    "Groups" : "Grupės",
    "Expert" : "Ekspertai",
    "Advanced" : "Išplėstiniai",
    "<b>Warning:</b> The PHP LDAP module is not installed, the backend will not work. Please ask your system administrator to install it." : "<b>Įspėjimas:</b> PHP LDAP modelis nėra instaliuotas, serveris nedirbs. Paprašykite, kad sistemos administratorius jį įdiegtų.",
    "Connection Settings" : "Ryšio nustatymai",
    "Configuration Active" : "Konfigūracija aktyvi",
    "When unchecked, this configuration will be skipped." : "Kai nepažymėta, ši konfigūracija bus praleista.",
    "Backup (Replica) Host" : "Atsarginės kopijos (Replica) serveris",
    "Give an optional backup host. It must be a replica of the main LDAP/AD server." : "Nurodykite atsarginį serverį, kuris būtų pagrindinio LDAP / AD serverio kopija.",
    "Backup (Replica) Port" : "Atsarginės kopijos (Replica) prievadas",
    "Disable Main Server" : "Išjungti pagrindinį serverį",
    "Only connect to the replica server." : "Tik prisijungti prie reprodukcinio (replica) serverio.",
    "Turn off SSL certificate validation." : "Išjungti SSL liudijimo tikrinimą.",
    "Not recommended, use it for testing only! If connection only works with this option, import the LDAP server's SSL certificate in your %s server." : "Nerekomenduojama, naudokite tik testavimui! Jei ryšys veikia, tik dėka šių nustatymų, suimportuokite savo %s serveryje LDAP serverio SSL sertifikatą.",
    "Directory Settings" : "Katalogo nustatymai",
    "User Display Name Field" : "Laukas Naudotojo rodomas vardas.",
    "The LDAP attribute to use to generate the user's display name." : "LDAP požymis, kuris bus naudojamas generuoti naudotojo rodomą vardą.",
    "2nd User Display Name Field" : "Laukas Antras naudotojo rodomas vardas",
    "Optional. An LDAP attribute to be added to the display name in brackets. Results in e.g. »John Doe (john.doe@example.org)«." : "Nebūtina. LDAP požymis, kuris bus pridėtas prie rodomo vardo ir atvaizduojamas skliaustuose. Pavyzdžiui: Vardenis Pavardenis (vardenis.pavardenis@example.com)",
    "Base User Tree" : "Bazinis naudotojo medis",
    "One User Base DN per line" : "Viena naudotojo DN šaka linijoje",
    "User Search Attributes" : "Naudotojo paieškos požymiai",
    "Optional; one attribute per line" : "Nebūtina; po vieną požymį kiekvienoje eilutėje",
    "Group Display Name Field" : "Laukas rodomas grupės vardas",
    "The LDAP attribute to use to generate the groups's display name." : "LDAP požymis, kuris bus naudojamas generuoti grupės rodomą pavadinimą.",
    "Base Group Tree" : "Bazinis grupės medis",
    "One Group Base DN per line" : "Viena grupės DN šaka linijoje",
    "Group Search Attributes" : "Grupės paieškos požymiai",
    "Group-Member association" : "Grupės-Nario sąsaja",
    "Dynamic Group Member URL" : "Dinaminio grupės nario URL",
    "The LDAP attribute that on group objects contains an LDAP search URL that determines what objects belong to the group. (An empty setting disables dynamic group membership functionality.)" : "LDAP požymis, kurio grupės objektuose yra LDAP paieškos URL, nustatantis kokie objektai priklauso grupei. (Tuščias nustatymas išjungia dinaminės grupės narystės funkcionalumą.)",
    "Nested Groups" : "Įdėtinės grupės",
    "When switched on, groups that contain groups are supported. (Only works if the group member attribute contains DNs.)" : "Kai įjungta, yra palaikomos grupės, kuriose yra grupės. (Veikia tik tuo atveju, jei grupės nario požymyje yra DN.)",
    "Enable LDAP password changes per user" : "Įjungti LDAP slaptažodžio keitimus kiekvienam naudotojui.",
    "Allow LDAP users to change their password and allow Super Administrators and Group Administrators to change the password of their LDAP users. Only works when access control policies are configured accordingly on the LDAP server. As passwords are sent in plaintext to the LDAP server, transport encryption must be used and password hashing should be configured on the LDAP server." : "Leisti LDAP naudotojams pakeisti savo slaptažodžius ir leisti Super Administratoriams bei Grupės administratoriams pakeisti savo LDAP naudotojų slaptažodžius. Veikia tik tada, kai prieigos valdymo politika yra sukonfigūruota pagal LDAP serverį.  Kadangi slaptažodžiai  į LDAP serverį yra siunčiami atviru tekstu, todėl jame turi būti naudojamas šifravimas ir slaptažodžių maiša.",
    "(New password is sent as plain text to LDAP)" : "(Naujas slaptažodis į LDAP yra siunčiamas kaip paprastas tekstas)",
    "Default password policy DN" : "Numatytų slaptažodžio taisyklių DN.",
    "The DN of a default password policy that will be used for password expiry handling. Works only when LDAP password changes per user are enabled and is only supported by OpenLDAP. Leave empty to disable password expiry handling." : "Numatytų slaptažodžio taisyklių DN, kuris bus naudojamas tvarkant slaptažodžio galiojimą.  Veikia tik tada, kai yra įjungtas LDAP vartotojo slaptažodžio keitimas ir yra palaikomas tik OpenLDAP. Palikite tuščią, jei norite išjungti slaptažodžio galiojimo tvarkymą.",
    "Special Attributes" : "Specialūs požymiai",
    "Quota Field" : "Leidžiamo duomenų kiekio laukas",
    "Leave empty for user's default quota. Otherwise, specify an LDAP/AD attribute." : "Palikite tuščią, jei norite, kad galiotų numatytasis naudotojui leidžiamas duomenų kiekis. Priešingu atveju, nurodykite LDAP/AD požymį.",
    "Quota Default" : "Leidžiamo duomenų kiekio numatytoji reikšmė",
    "Override default quota for LDAP users who do not have a quota set in the Quota Field." : "Nustelbti numatytąjį leidžiamą duomenų kiekį LDAP naudotojams, kurie leidžiamo duomenų kiekio lauke neturi nustatyto leidžiamo duomenų kiekio.",
    "Email Field" : "El. pašto laukas",
    "Set the user's email from their LDAP attribute. Leave it empty for default behaviour." : "Nustatyti naudotojų el. paštą pagal jų LDAP požymį. Numatytąjai elgsenai, palikite tuščią.",
    "User Home Folder Naming Rule" : "Naudotojo namų aplanko pavadinimo taisyklė",
    "Leave empty for user name (default). Otherwise, specify an LDAP/AD attribute." : "Palikite tuščią naudotojo vardui (numatytoji reikšmė).  Priešingu atveju, nurodykite LDAP/AD požymį.",
    "Internal Username" : "Vidinis naudotojo vardas",
    "By default the internal username will be created from the UUID attribute. It makes sure that the username is unique and characters do not need to be converted. The internal username has the restriction that only these characters are allowed: [ a-zA-Z0-9_.@- ].  Other characters are replaced with their ASCII correspondence or simply omitted. On collisions a number will be added/increased. The internal username is used to identify a user internally. It is also the default name for the user home folder. It is also a part of remote URLs, for instance for all *DAV services. With this setting, the default behavior can be overridden. Leave it empty for default behavior. Changes will have effect only on newly mapped (added) LDAP users." : "Pagal numatymą vidinis naudotojo vardas bus sukurtas iš UUID požymio. Tai užtikrina naudotojo vardo unikalumą ir tuo pačiu nereikia konvertuoti simbolių. Vidinis naudotojo vardas turi apribojimą, leidžiantį tik šiuos simbolius: [ a-zA-Z0-9 _. @ - ]. Kiti simboliai pakeičiami ASCII atitikmenimis arba tiesiog praleidžiami. Sutapimų konflikto atveju yra pridedamas/padidinamas skaičius. Vidinis naudotojo vardas yra naudojamas identifikuoti naudotoją viduje. Tai kartu yra numatytasis naudotojo aplanko pavadinimas. Taip pat jis yra nuotolinių URL dalimi, pavyzdžiui, visoms *DAV paslaugoms. Naudojant šį nustatymą, numatytoji elgsena gali būti nustelbta. Palikite tuščią, jei norite kad galiotų numatytoji elgsena. Pakeitimai įsigalios tik naujai priskirtiems (pridėtiems) LDAP naudotojams.",
    "Internal Username Attribute:" : "Vidinis naudotojo vardo požymis:",
    "Override UUID detection" : "Perrašyti UUID aptikimą",
    "By default, the UUID attribute is automatically detected. The UUID attribute is used to doubtlessly identify LDAP users and groups. Also, the internal username will be created based on the UUID, if not specified otherwise above. You can override the setting and pass an attribute of your choice. You must make sure that the attribute of your choice can be fetched for both users and groups and it is unique. Leave it empty for default behavior. Changes will have effect only on newly mapped (added) LDAP users and groups." : "Pagal numatymą, UUID požymis yra aptinkamas automatiškai. UUID požymis yra naudojamas neabejotinai identifikuoti LDAP naudotojus ir grupes. Be to, vidinis naudotojo vardas bus sukurtas remiantis UUID, jei nenurodyta kitaip. Jūs galite nustelbti nustatymą ir perduoti savo pasirinktą požymį. Turite įsitikinti, kad jūsų pasirinktą požymį gali gauti tiek naudotojai, tiek grupės ir, kad jis yra unikalus. Numatytajai elgsenai, palikite tuščią. Pakeitimai turės įtakos tik naujai susiejamiems (pridedamiems) LDAP naudotojams ir grupėms.",
    "UUID Attribute for Users:" : "UUID požymis naudotojams:",
    "UUID Attribute for Groups:" : "UUID požymis grupėms:",
    "Username-LDAP User Mapping" : "Naudotojo vardo - LDAP naudotojo sąsaja",
    "Clear Username-LDAP User Mapping" : "Išvalyti naudotojo vardo - LDAP naudotojo sąsają"
},
"nplurals=4; plural=(n % 10 == 1 && (n % 100 > 19 || n % 100 < 11) ? 0 : (n % 10 >= 2 && n % 10 <=9) && (n % 100 > 19 || n % 100 < 11) ? 1 : n % 1 != 0 ? 2: 3);");
