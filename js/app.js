var app = 
{
    beDays : 0,
    feDays : 0,
    qaDays : 0,
    iterations : 0,
    iterationDuration : 0,
    feTeamSize : 0,
    beTeamSize : 0,
    feManagementPercentage : 0,
    backendManagementPercentage : 0,
    iteration1Efficiency : 0,
    iternationNEfficiency : 0,
    QAPercentageEffort : 0,
    DCPercentageBuildTime : 0,
    TechLeadershipTime : 0,
    UATSupportPercent : 0,
    WarrantySupportPercent : 0,

    init: function () 
    {

        window.addEventListener('resize', app.onWindowResize, false);

        /*$("#dotNetDays").keyup(function()
        {
    		var value = $( this ).val();
  		})
  		.keyup();
		*/

  		$("#submitBtn").click(function()
  		{
  			app.feDays = $("#frontendDays").val();
  			app.beDays = $("#backendDays").val();

  			setText();
  		});
  			
    },

    onWindowResize : function () 
    {
  
    }
};

function setText(  ) 
{
	//var trixel = new Trixel( tm, [ position ] ) ;
	//console.log(app.feDays + "," + app.beDays);
	$( "p" ).text( app.feDays + "," + app.beDays );
};

function Trixel( mesh, positions ) 
{

};