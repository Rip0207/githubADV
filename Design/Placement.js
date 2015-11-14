Base();
//Fonction principale
function Base()
{
	//Objets principaux
	var planche =1;
	var delay = new Delay(1);
	var interval ;
	var elementCentre = document.getElementsByClassName(C_center);
	var elementCentreX = document.getElementsByClassName(C_centerX);
	var elementCentreY = document.getElementsByClassName(C_centerY);
	var formConnexion = document.getElementById(C_FormCo);
	var formInscription = document.getElementById(C_FormSub);
	
	//Placement des boutons de transition de planches
	AddInputs(document.getElementById(C_BoutonToPlanche).getElementsByTagName("fieldset")[0],getLastPlanche(),C_ToPlanche);
	
	//Ajouts des évènements
	AddEvents();
	
	//Placement graphiques des éléments qui le nécéssitent.
	GraphicalInit();

	function AddEvents()
	{
		//Evite certains désagréements.
		window.onresize = GraphicalInit;	
		document.body.onload = Load;		
		
		document.body.addEventListener("wheel",WheelChangementPlan);		
		document.addEventListener("Delayed",function(){clearInterval(interval);});
		var btnLogs = document.getElementsByName(C_BTN_Log);
		for(var i = 0;i< btnLogs.length;i++ )
		{		
			btnLogs[i].addEventListener("click",function(){
				var btnPlanche= document.getElementById(C_BoutonToPlanche).getElementsByTagName("fieldset")[0].getElementsByTagName("ul")[0].getElementsByTagName("li")[planche-1].getElementsByTagName("input")[0];
				if(!HasClass(btnPlanche,C_Disabled))
				{	
					btnPlanche.classList.toggle(C_Disabled);
				}			
				var NewbtnPlanche= document.getElementById(C_BoutonToPlanche).getElementsByTagName("fieldset")[0].getElementsByTagName("ul")[0].getElementsByTagName("li")[0].getElementsByTagName("input")[0];
				
				if(HasClass(NewbtnPlanche,C_Disabled))
				{	
					NewbtnPlanche.classList.toggle(C_Disabled);
				}
				GoToPlanche(1);
				});
		}
		var btnSubs = document.getElementsByName(C_BTN_Sub);
		for(var i = 0;i< btnSubs.length;i++ )
		{		
			btnSubs[i].addEventListener("click",function(){
				var btnPlanche= document.getElementById(C_BoutonToPlanche).getElementsByTagName("fieldset")[0].getElementsByTagName("ul")[0].getElementsByTagName("li")[planche-1].getElementsByTagName("input")[0];
				if(!HasClass(btnPlanche,C_Disabled))
				{	
					btnPlanche.classList.toggle(C_Disabled);
				}			
				var NewbtnPlanche= document.getElementById(C_BoutonToPlanche).getElementsByTagName("fieldset")[0].getElementsByTagName("ul")[0].getElementsByTagName("li")[getLastPlanche()-1].getElementsByTagName("input")[0];
				
				if(HasClass(NewbtnPlanche,C_Disabled))
				{	
					NewbtnPlanche.classList.toggle(C_Disabled);
				}
				GoToPlanche(getLastPlanche());
				});
		}
		
		formConnexion.onsubmit=CheckConnexion;
		formInscription.onsubmit=CheckSubscription;
		
		var btnPlanche= document.getElementById(C_BoutonToPlanche).getElementsByTagName("fieldset")[0].getElementsByTagName("ul")[0].getElementsByTagName("li");
		
		for(var i = 0;i< btnPlanche.length;i++ )
		{		
			btnPlanche[i].getElementsByTagName("input")[0].addEventListener("click",ButtonChangementPlan);
		}
		
		var btnSpecialPlanche = document.getElementById(C_NavLeft).getElementsByTagName("ul")[0].getElementsByTagName("li");
		for(var i = 0;i< btnSpecialPlanche.length;i++ )
		{		
			btnSpecialPlanche[i].getElementsByTagName("input")[0].addEventListener("click",ButtonChangementPlan);
		}
		var btnSPreview = document.getElementsByClassName(C_Preview)
		for(var i = 0;i< btnSPreview.length;i++ )
		{		
			var num = SearchParentFromClass(btnSPreview[i],C_ClassPlanche).getAttribute("id").split("_")[1];
			if(num!=NaN)
			{
				btnSPreview[i].setAttribute("name","Preview_"+((parseInt(num))+1));				
				btnSPreview[i].addEventListener("click",ButtonChangementPlan);
				var btnSPreviewIMG= btnSPreview[i].getElementsByTagName("img");
				
				for	(var j = 0;j< btnSPreviewIMG.length;j++ )
				{
					btnSPreviewIMG[j].setAttribute("name","PreviewIMG_"+((parseInt(num))+1));		
				}
			}
			
		}
	}
	
	//Replacement des éléments graphique le nécéssitant
	function GraphicalInit()
	{		
		for( var i = 0; i<elementCentre.length;i++)
		{
			Displace(elementCentre[i],true,true);
		}
		for( var i = 0; i<elementCentreX.length;i++)
		{
			Displace(elementCentreX[i],false,true);
		}
		for( var i = 0; i<elementCentreY.length;i++)
		{
			Displace(elementCentreY[i],true,false);
		}
	}
	
	function Load()
	{
		GraphicalInit();
		var spinner = document.getElementById(C_Spinner);
		if(spinner !=null)
		{
			spinner.classList.toggle(C_VisualyDisabled);
			setTimeout(function(){
				spinner.classList.toggle(C_VisualyDisabled);
				spinner.classList.toggle(C_Disabled);
			},
			C_AnimDelay_02*1000
			);
		}
			
	}
	
	function WheelChangementPlan(e)
	{
		if(delay.Current == 0)
		{
			
			if(e.deltaY>0?true:false)
			{
				if(planche <getLastPlanche())
				{
					var btnPlanche= document.getElementById(C_BoutonToPlanche).getElementsByTagName("fieldset")[0].getElementsByTagName("ul")[0].getElementsByTagName("li")[planche-1].getElementsByTagName("input")[0];
					if(!HasClass(btnPlanche,C_Disabled))
					{	
						btnPlanche.classList.toggle(C_Disabled);
					}			
					var NewbtnPlanche= document.getElementById(C_BoutonToPlanche).getElementsByTagName("fieldset")[0].getElementsByTagName("ul")[0].getElementsByTagName("li")[planche].getElementsByTagName("input")[0];
					
					if(HasClass(NewbtnPlanche,C_Disabled))
					{	
						NewbtnPlanche.classList.toggle(C_Disabled);
					}
				}
				GoToPlanche(planche+1);
								
			}
			else
			{
				if(planche >1)
				{
					var btnPlanche= document.getElementById(C_BoutonToPlanche).getElementsByTagName("fieldset")[0].getElementsByTagName("ul")[0].getElementsByTagName("li")[planche-1].getElementsByTagName("input")[0];
					if(!HasClass(btnPlanche,C_Disabled))
					{	
						btnPlanche.classList.toggle(C_Disabled);
					}			
					var NewbtnPlanche= document.getElementById(C_BoutonToPlanche).getElementsByTagName("fieldset")[0].getElementsByTagName("ul")[0].getElementsByTagName("li")[planche-2].getElementsByTagName("input")[0];
					
					if(HasClass(NewbtnPlanche,C_Disabled))
					{	
						NewbtnPlanche.classList.toggle(C_Disabled);
					}
				}
				GoToPlanche(planche-1);
			}
			delay.Start();
			interval = setInterval(function(){delay.Decrement();}, 1000);
		}
	}
	function ButtonChangementPlan(e)
	{
		if(delay.Current == 0)
		{	
			var oldBtnPlanche= document.getElementById(C_BoutonToPlanche).getElementsByTagName("fieldset")[0].getElementsByTagName("ul")[0].getElementsByTagName("li")[planche-1].getElementsByTagName("input")[0];
			if(!HasClass(oldBtnPlanche,C_Disabled))
			{	
				oldBtnPlanche.classList.toggle(C_Disabled);
			}
			var newBtnPlanche = getElementByNameAndTag(
					document.getElementById(C_BoutonToPlanche),
					"input",
					C_ToPlanche+"_"+parseInt(e.target.getAttribute("name").split("_")[1])
					);
			if(HasClass(newBtnPlanche,C_Disabled))
			{	
				newBtnPlanche.classList.toggle(C_Disabled);
			}
			GoToPlanche(parseInt(e.target.getAttribute("name").split("_")[1]));
			delay.Start();
			interval = setInterval(function(){delay.Decrement();}, C_AnimDelay_01*1000);			
		}
	}
	function getLastPlanche()
	{
		var lastPlanche = document.getElementsByClassName("Last")[0];
		return parseInt(lastPlanche.getAttribute("id").split("_")[1]);
	}
	
	function GoToPlanche(p_Planche,p_Multiple)
	{
		if(p_Multiple=="undefined")
		{
			p_Multiple=false;
		}
		var old,oldPreview ,newest,newestPreview ,oldTransi, newTransi , increment;
		
		if(planche < Math.abs(parseInt(p_Planche)))
		{
			old = document.getElementById(C_Planche+"_"+planche);			
			newest = document.getElementById(C_Planche+"_"+(planche+1));			
			newTransi = 0;
			increment = 1;
			oldTransi =p_Multiple?4:2;
			
		}
		else if(planche > Math.abs(parseInt(p_Planche)))
		{
			old = document.getElementById(C_Planche+"_"+planche);
			newest = document.getElementById(C_Planche+"_"+(planche-1));			
			newTransi = 1;
			increment = -1;
			oldTransi = p_Multiple? 5:3;
		}
		
		if(newest==null)
		{
			return;
		}
				
		oldPreview =GetArrayFromNodeList(old.getElementsByClassName(C_Preview));
		newestPreview =GetArrayFromNodeList(newest.getElementsByClassName(C_Preview));
		
		ResetClasses(old,C_PlancheTransition);		
		ResetClasses(oldPreview,C_PlancheTransition);
		old.offsetWidth = old.offsetWidth;		
		if(!HasClass(old,C_LastPlanche))
		{			
			old.classList.toggle(C_PlancheTransition[oldTransi]);
			old.style.WebkitAnimationDuration=C_AnimDelay_01+"s";
			old.style.MozAnimationDuration=C_AnimDelay_01+"s";
			old.style.OAnimationDuration=C_AnimDelay_01+"s";
			old.style.AnimationDuration=C_AnimDelay_01+"s";
		}
		
		for(var i =0;i<oldPreview.length;i++)
		{
			oldPreview[i].classList.toggle(C_PlancheTransition[oldTransi]);
			oldPreview[i].style.WebkitAnimationDuration=C_AnimDelay_01+"s";
			oldPreview[i].style.MozAnimationDuration=C_AnimDelay_01+"s";
			oldPreview[i].style.OAnimationDuration=C_AnimDelay_01+"s";
			oldPreview[i].style.AnimationDuration=C_AnimDelay_01+"s";
		}

		ResetClasses(newest,C_PlancheTransition);		
		ResetClasses(newestPreview,C_PlancheTransition);
		newest.offsetWidth = newest.offsetWidth;		
		if(!HasClass(newest,C_LastPlanche))
		{					
			newest.classList.toggle(C_PlancheTransition[newTransi]);
			newest.style.WebkitAnimationDuration=C_AnimDelay_01+"s";
			newest.style.MozAnimationDuration=C_AnimDelay_01+"s";
			newest.style.OAnimationDuration=C_AnimDelay_01+"s";
			newest.style.AnimationDuration=C_AnimDelay_01+"s";
		}
		
		for(var i =0;i<newestPreview.length;i++)
		{			
			newestPreview[i].classList.toggle(C_PlancheTransition[newTransi]);
			newestPreview[i].style.WebkitAnimationDuration=C_AnimDelay_01+"s";
			newestPreview[i].style.MozAnimationDuration=C_AnimDelay_01+"s";
			newestPreview[i].style.OAnimationDuration=C_AnimDelay_01+"s";
			newestPreview[i].style.AnimationDuration=C_AnimDelay_01+"s";
		}
		
		planche+=increment;
		
		if(planche !=  Math.abs(parseInt(p_Planche)))
		{
			GoToPlanche(Math.abs(parseInt(p_Planche)),true);
		}
	}
		
	function CheckConnexion(e)
	{
		var inputs =e.target.getElementsByTagName("input");
		var canBeSend = true;
		for(var i =0;i<inputs.length;i++)
		{
			if(inputs[i].getAttribute("type")=="text" || inputs[i].getAttribute("type")=="password")
			{
				if(inputs[i].value == "")
				{
					if(!HasClass(inputs[i],C_erreur))
					{
						inputs[i].classList.toggle(C_erreur);
					}
					canBeSend=false;
				}
			}
		}
		return canBeSend;
	}
	function CheckSubscription(e)
	{
		var inputs =e.target.getElementsByTagName("input");
		var canBeSend = true;
		var pass;
		for(var i =0;i<inputs.length;i++)
		{
			if(inputs[i].getAttribute("type")=="text" || inputs[i].getAttribute("type")=="password")
			{
				if(inputs[i].value == "")
				{
					if(!HasClass(inputs[i],C_erreur))
					{
						inputs[i].classList.toggle(C_erreur);
					}
					canBeSend=false;
				}
				else if(inputs[i].name==C_Mail)
				{
					var reg = new RegExp('^[0-9A-z._-]+@{1}[0-9A-z.-]{2,}[.]{1}[A-z]{2,5}$');
					if( !reg.test(inputs[i].value))
					{
						if(!HasClass(inputs[i],C_erreur))
						{
							inputs[i].classList.toggle(C_erreur);
						}
						inputs[i].value="";
						inputs[i].setAttribute("placeholder","Email invalide");
						canBeSend=false;
					}						
					
				}
				else if(inputs[i].name==C_Pass)
				{
					var reg = new RegExp('^[0-9A-z._-]{6,}');
					console.log(reg.test(inputs[i].value));
					if( reg.test(inputs[i].value))
					{
						pass=inputs[i];	
						
					}
					else
					{
						if(!HasClass(inputs[i],C_erreur))
						{
							inputs[i].classList.toggle(C_erreur);
						}
						inputs[i].value="";
						inputs[i].setAttribute("placeholder","Minimum : 6 caractères");
						
						canBeSend=false;
					}					
					
				}
				else if(inputs[i].name==C_VerifPass)
				{
					if(pass == null)
					{
					}
					else if(pass.value!==inputs[i].value)
					{
						if(!HasClass(inputs[i],C_erreur))
						{
							inputs[i].classList.toggle(C_erreur);
						}
						inputs[i].value="";
						inputs[i].setAttribute("placeholder","Mot de passe différent");
						
						
						if(!HasClass(pass,C_erreur))
						{
							pass.classList.toggle(C_erreur);
						}
						pass.value="";
						pass.setAttribute("placeholder","Mot de passe différent");
						
						canBeSend=false;
					}					
					
				}
			}
		}		
		
		return canBeSend;
	}
	
	function AddInputs(p_Container,p_Nombre,p_Nom)
	{
		clearNode(p_Container);
		var ul = document.createElement("ul");
		
		for(var i= 1;i<=p_Nombre;i++)
		{
			var li = document.createElement("li");
			var input = document.createElement("input");
			
			input.setAttribute("name",p_Nom+"_"+i);
			input.setAttribute("type","button");
			if(i>1)
			{
				input.classList.toggle(C_Disabled);
			}
			
			li.appendChild(input);
			ul.appendChild(li);
		}
		
		p_Container.appendChild(ul);
	}
}



