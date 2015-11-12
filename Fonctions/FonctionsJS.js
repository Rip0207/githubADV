//Vérifie si l'élément possède la classe
function HasClass(p_Element,p_ClassName)
{
    var classes = p_Element.className.split(" ");
    for (var i = 0; i < classes.length ; i++) {
         if (classes[i]==p_ClassName)
         {
            return true;
         }
    }
    return false;
}

//Si l'élément/tableau d'éléments possède la classe, cette classe est retirée (la classe peut être contenus dans un tableau et/ou être après une autre)
function ResetClasses(p_Elem,p_Class)
{	
	if(arguments.length<2)
	{
		return;
	}
	if(typeof(p_Elem)!== "object")
	{
		return;
	}
	else if(Array.isArray(p_Elem))
	{
		for(var j = 0 ; j< p_Elem.length;j++)
		{
			for(var i = 1 ; i<arguments.length;i++)
			{
				ResetClasses(p_Elem[j],arguments[i]);
			}
		}
		return;
	}
	else if(p_Elem.nodeType===undefined)
	{
		
		console.log(p_Elem);
		console.log(Array.isArray(p_Elem));
		return;
	}
	for(var i = 1 ; i<arguments.length;i++)
	{
		if(typeof(arguments[i])==="string")
		{
			if(HasClass(p_Elem,arguments[i]))
			{
				p_Elem.classList.toggle(arguments[i]);
			}
		}
		else if(typeof(arguments[i])==="object")
		{
			if(Array.isArray(arguments[i]))
			{
				for(var j = 0 ; j< arguments[i].length;j++)
				{
					ResetClasses(p_Elem,arguments[i][j]);
				}
			}
		}
	}
}

function GetArrayFromNodeList(p_NodeList)
{
	var nodes =[]; 
	for(var i = 0 ;i<p_NodeList.length;i++)
	{
		nodes.push(p_NodeList[i]);
	}
	return nodes;
}

//Objet de déploiement
function Displayer(p_ContainerName, p_ActivatorName,p_DesactivatorName)
{
	this.container = document.getElementById(p_ContainerName);
	if(this.container === null)
	{
		return;
	}
		
	this.Active=function()
	{
		this.ReinitState();
		if(!(HasClass(this.container,"Activated")))
		{
			this.container.className+=" Activated";
		}
	}
	this.Desactive=function()
	{
		this.ReinitState();
		if(!(HasClass(this.container,"Desactivated")))
		{
			this.container.className+=" Desactivated";
		}
	}
	this.ReinitState = function()
	{
		if((HasClass(this.container,"Activated")))
		{
			this.container.classList.toggle("Activated");
		}
		if((HasClass(this.container,"Desactivated")))
		{
			this.container.classList.toggle("Desactivated");
		}
	}
	this.activator = document.getElementById(p_ActivatorName);
	if(this.activator === null)
	{
		return;
	}
	
	this.desactivator = document.getElementById(p_DesactivatorName);
	if(this.desactivator === null)
	{
		return;
	}
}

//Retourne la valeur d'un attribut
function getValue(p_String)
{
	var regle = new RegExp("px","g");
	var value = null;
	try
	{
		value= parseFloat( p_String.split(regle)[0]);
	}
	catch (e)
	{
	}

	return value;
}

//Ajoute la classe si la valeur est null ou vide
function ToggleClassIfEmpty(p_Element,p_Value,p_Class)
{
	if(p_Value === "")
	{
		if(!(HasClass(p_Element,p_Class)))
		{
			p_Element.className+=" "+p_Class;
		}
		return true;
	}
	else
	{
		if((HasClass(p_Element,p_Class)))
		{
			p_Element.classList.toggle(p_Class);
		}
		return false;
	}
}

//Supprime tout les noeuds enfants
function clearNode(p_Nodes)
{
	while(p_Nodes.childNodes.length>0)
	{
		p_Nodes.removeChild(p_Nodes.childNodes[0]);

	}
}

//Renvoie la valeur du premier enfant de l'élément
function getFirstChildValue(p_Node,p_Tag)
{
	return p_Node.getElementsByTagName(p_Tag)[0].childNodes[0].nodeValue;
}

//Renvoie le premier élément possédant le nom et le tag demandé
function getElementByNameAndTag(p_Node,p_Tag,p_Name)
{
	var childNode=p_Node.getElementsByTagName(p_Tag);
	for(var i=0;i<childNode.length;i++)
	{
		if(childNode[i].name !== "undefined")
		{
			if(p_Name === childNode[i].name)
			{				
				return childNode[i];
			}
		}
	}
	return null;
}

//Centre les éléments en X et/ou en Y
function Displace(p_Element,p_Vertical,p_Horizontal)
{	
	if(p_Vertical)
	{
		var relativeHeight;
		if(p_Element.parentNode==document.body)
		{
			relativeHeight=document.body.clientHeight;
		}
		else
		{
			relativeHeight=getValue( window.getComputedStyle(p_Element.parentNode)["height"]);
		}
		var height = getValue( window.getComputedStyle(p_Element)["height"]);   
        p_Element.style.top=((relativeHeight/2.0)-(height/2.0))+"px";
        
	}
	
	if(p_Horizontal)
	{
		var relativeWidth;
		if(p_Element.parentNode==document.body)
		{
			relativeWidth=document.body.clientWidth;
		}
		else
		{
			relativeWidth=getValue( window.getComputedStyle(p_Element.parentNode)["width"]);
		}
		var width = getValue( window.getComputedStyle(p_Element)["width"]);
		p_Element.style.left=((relativeWidth/2.0)-(width/2.0))+"px";
	}
}

//Envoie une requête et appelle la fonction demandé si tout vas bien.
function SendRequest(url,params,fonction)
{
	var http = new XMLHttpRequest();
	
	http.open("POST", url, true);
	http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

	http.onreadystatechange = function() {
		if(http.readyState == 4 && http.status == 200) {
			
			fonction(http.responseText);
		}
	}
	http.send(params);
}
