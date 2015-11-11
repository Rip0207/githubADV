function Delay(p_Duration)
{
	this.Duration = Math.abs(p_Duration)>1?p_Duration:1;
	this.Current = 0;
	this.event = new Event('Delayed');
	this.Decrement = function()
	{		
		if(this.Current==1)
		{
			document.dispatchEvent(this.event);
		}
		else if(this.Current == 0)
		{
			return;
		}
		this.Current--;
	}
	this.Start = function()
	{
		this.Current=this.Duration;
	}
	
}