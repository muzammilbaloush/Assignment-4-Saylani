// JavaScript Document

function item1 (pro,img,p,t,c,h,pin,eer,col,type,smode,tmode)
{
	document.getElementById('p_1').innerHTML = pro;
	document.getElementById('image-one').style.backgroundImage = img;
	document.getElementById('price_1').innerHTML = p;
	document.getElementById('ton_1').innerHTML = t;
	document.getElementById('cooling_1').innerHTML = c;
	document.getElementById('heating_1').innerHTML = h;
	document.getElementById('power_1').innerHTML = pin;
	document.getElementById('eer_1').innerHTML = eer;
	document.getElementById('color_1').innerHTML = col;
	document.getElementById('type_1').innerHTML = type;
	document.getElementById('sleep_1').innerHTML = smode;
	document.getElementById('turbo_1').innerHTML = tmode;
}
function item2 (pro,img,p,t,c,h,pin,eer,col,type,smode,tmode)
{
	document.getElementById('p_2').innerHTML = pro;
	document.getElementById('image-two').style.backgroundImage = img
	document.getElementById('price_2').innerHTML = p
	document.getElementById('ton_2').innerHTML = t
	document.getElementById('cooling_2').innerHTML = c
	document.getElementById('heating_2').innerHTML = h
	document.getElementById('power_2').innerHTML = pin
	document.getElementById('eer_2').innerHTML = eer
	document.getElementById('color_2').innerHTML = col
	document.getElementById('type_2').innerHTML = type
	document.getElementById('sleep_2').innerHTML = smode
	document.getElementById('turbo_2').innerHTML = tmode
}

var AC = [
	//Dawlance Start here................................................................
	{
	Name: 'Dawlance Inspire Plus',
	img:"url(images/dawlance/12.png)",
	price : '43,500/-',
	ton : '1',
	c_capacity : '12000 BTU',
	h_capacity : '/',
	p_input : '1190 W',
	eer : '2.75',
	color : ' Maroon | Golden',
	type : 'Wall Mounted Split AC',
	s_mode : 'Yes',
	t_mode : '/'
	},
	{
	Name: 'Dawlance Energy Saver',
	img:"url(images/dawlance/1.jpg)",
	price : '32,500/-',
	ton : '1.5',
	c_capacity : '12000 BTU',
	h_capacity : '/',
	p_input : '1190 W',
	eer : '2.75',
	color : 'gray / black',
	type : 'Wall Mounted Split AC',
	s_mode : 'Yes',
	t_mode : '/'
	},
	{
	Name: 'Dawlance Energy Saver 30',
	img:"url(images/dawlance/4.jpg)",
	price : '42,500/-',
	ton : '2',
	c_capacity : ' 18000 BTU ',
	h_capacity : '/',
	p_input : '1190 W',
	eer : '2.74',
	color : 'White',
	type : 'Wall Mounted Split AC',
	s_mode : 'Yes',
	t_mode : '/'
	},
	{
	Name: 'Dawlance Signature 15',
	img:"url(images/dawlance/7.jpg)",
	price : '33,500/-',
	ton : '1',
	c_capacity : '18000 BTU',
	h_capacity : '/',
	p_input : '1600 W',
	eer : '2.73',
	color : 'Grey',
	type : 'Wall Mounted Split AC',
	s_mode : 'Yes',
	t_mode : '/'
	},
	{
	Name: 'Dawlance Inverter-30',
	img:"url(images/dawlance/10.jpg)",
	price : '78,900/-',
	ton : '2',
	c_capacity : '18000 BTU',
	h_capacity : '/',
	p_input : '1518 W',
	eer : '3.1',
	color : 'blue',
	type : 'Wall Mounted Split AC',
	s_mode : 'Yes',
	t_mode : '/'
	},
	{
	Name: 'Dawlance Monogram  SL-45',
	img:"url(images/dawlance/9.png)",
	price : '58,000/-',
	ton : '1.5',
	c_capacity : '18000 BTU',
	h_capacity : '/',
	p_input : '1600 W',
	eer : '2.73',
	color : 'White',
	type : 'Wall Mounted Split AC',
	s_mode : 'Yes',
	t_mode : '/'
	},
	
	//dawlance End here................................................................

	////haier Start here................................................................
	{
	Name: 'HSU 12HQA R2-DB DC',
	img:"url(images/haier/1.jpg)",
	price : ' 63,000/-',
	ton : '2',
	c_capacity : '18000 BTU',
	h_capacity : '/',
	p_input : '/',
	eer : '2.93',
	color : 'Golden',
	type : 'Wall mounted split AC',
	s_mode : '/',
	t_mode : '/'
	},
	{
	Name: 'HSU 18HZE R2',
	img:"url(images/haier/2.jpg)",
	price : '73,000/-',
	ton : '1.5',
	c_capacity : '18000 BTU / hr',
	h_capacity : '/',
	p_input : '/',
	eer : '2.93',
	color : 'Golden',
	type : 'Wall mounted split AC',
	s_mode : '/',
	t_mode : '/'
	},
	{
	Name: 'HSU-12LXA03ZA',
	img:"url(images/haier/3.jpg)",
	price : '35,500/-',
	ton : '1',
	c_capacity : '18000 BTU',
	h_capacity : '/',
	p_input : '/',
	eer : '2.93',
	color : 'Golden',
	type : 'Wall mounted split AC',
	s_mode : '/',
	t_mode : '/'
	},
	{
	Name: 'HSU-12LXA-ZC',
	img:"url(images/haier/4.jpg)",
	price : '36,000/-',
	ton : '1',
	c_capacity : '24000 BTU',
	h_capacity : '/',
	p_input : '/',
	eer : '/',
	color : 'Golden',
	type : 'Wall mounted split AC',
	s_mode : '/',
	t_mode : '/'
	},
	{
	Name: 'HSU-12LKE10',
	img:"url(images/haier/5.jpg)",
	price : '38,500/-',
	ton : '1',
	c_capacity : '24000 BTU',
	h_capacity : '/',
	p_input : '/',
	eer : '/',
	color : 'Golden',
	type : 'Wall mounted split AC',
	s_mode : '/',
	t_mode : '/'
	},
	{
	Name: ' HSU-18LKE8A',
	img:"url(images/haier/18.jpg)",
	price : '48,000/-',
	ton : '1',
	c_capacity : '12,100 BTU',
	h_capacity : '/',
	p_input : '/',
	eer : '/',
	color : 'White',
	type : 'Wall mounted split AC',
	s_mode : '/',
	t_mode : '/'
	},
	{
	Name: 'HSU-18LEK E2',
	img:"url(images/haier/15.jpg)",
	price : '47,500/-',
	ton : '1.5',
	c_capacity : '18000 BTU',
	h_capacity : '/',
	p_input : '/',
	eer : '/',
	color : 'White',
	type : 'Wall mounted split AC',
	s_mode : '/',
	t_mode : '/'
	},
    {
	Name: 'HSU-18LEK E6',
	img:"url(images/haier/3.jpg)",
	price : '46,500/-',
	ton : '1.5',
	c_capacity : '18000 BTU',
	h_capacity : '/',
	p_input : '/',
	eer : '/',
	color : 'White',
	type : 'Wall mounted split AC',
	s_mode : '/',
	t_mode : '/'
	},
	//haier End here................................................................
	
	//lg Start here................................................................
	{
	Name: '126SQ',
	img:"url(images/lg/1.jpg)",
	price : '69,000/-',
	ton : '1.5',
	c_capacity : '12000 BTU',
	h_capacity : '/',
	p_input : '/',
	eer : '/',
	color : 'White',
	type : 'Wall mounted split AC',
	s_mode : '/',
	t_mode : '/'
	},
	{
	Name: '186SQ',
	img:"url(images/lg/2.jpg)",
	price : '86,000/-',
	ton : '2',
	c_capacity : '18000 BTU',
	h_capacity : '/',
	p_input : '/',
	eer : '/',
	color : 'White',
	type : 'Wall mounted split AC',
	s_mode : '/',
	t_mode : '/'
	},
	{
	Name: '246SQ',
	img:"url(images/lg/3.jpeg)",
	price : '110,000/-',
	ton : '2',
	c_capacity : '24000 BTU',
	h_capacity : '/',
	p_input : '/',
	eer : '/',
	color : 'White',
	type : 'Wall mounted split AC',
	s_mode : '/',
	t_mode : '/'
	},
	{
	Name: 'LG S-186 HC',
	img:"url(images/lg/4.jpg)",
	price : '49,000/-',
	ton : '1',
	c_capacity : '12000 BTU',
	h_capacity : '/',
	p_input : '1220 W',
	eer : '9.7',
	color : 'White',
	type : 'Wall mounted split AC',
	s_mode : '/',
	t_mode : '/'
	},
	{
	Name: 'LG Jet Cool S186 DC',
	img:"url(images/lg/5.jpg)",
	price : '55,000/-',
	ton : '1.5',
	c_capacity : '18000 BTU',
	h_capacity : '/',
	p_input : '1220 W',
	eer : '9.5',
	color : 'White',
	type : 'Wall mounted split AC',
	s_mode : '/',
	t_mode : '/'
	},
	{
	Name: 'LG Jet Cool S126 DC',
	img:"url(images/lg/6.jpg)",
	price : '47,500/-',
	ton : '1',
	c_capacity : '24000 BTU',
	h_capacity : '/',
	p_input : '1220 W',
	eer : '9.5',
	color : 'White',
	type : 'Wall mounted split AC',
	s_mode : '/',
	t_mode : '/'
	},
    {
	Name: 'LG Jet Cool S246 DC',
	img:"url(images/lg/8.jpg)",
	price : '74,000/-',
	ton : '1',
	c_capacity : '24000 BTU',
	h_capacity : '/',
	p_input : '1220 W',
	eer : '9.5',
	color : 'White',
	type : 'Wall mounted split AC',
	s_mode : '/',
	t_mode : '/'
	},
	//lg End here................................................................
	
	//Mitsubishi Start here................................................................
	{
	Name: 'Inverter Series HJ35VA',
	img:"url(images/Mitsubishi/1.jpg)",
	price : '81,000/-',
	ton : '1',
	c_capacity : '5.01 KW',
	h_capacity : '/',
	p_input : '1740-1790 W',
	eer : '2.88',
	color : 'White',
	type : 'Wall mounted split AC',
	s_mode : 'Yes',
	t_mode : '/'
	},
	{
	Name: 'SRK 13CJK Heavy Industries',
	img:"url(images/Mitsubishi/2.jpg)",
	price : '48,000/-',
	ton : '1',
	c_capacity : '6.70 KW',
	h_capacity : '/',
	p_input : '2400-2500 W',
	eer : '2.79',
	color : 'White',
	type : 'Wall mounted split AC',
	s_mode : 'Yes',
	t_mode : '/'
	},
	{
	Name: 'MS-13 VC Mr Slim Split',
	img:"url(images/Mitsubishi/4.jpg)",
	price : '48,500/-',
	ton : '0.81',
	c_capacity : '2.8 kW',
	h_capacity : '/',
	p_input : '890 W',
	eer : '3.15',
	color : 'White',
	type : 'Wall mounted split AC',
	s_mode : 'Yes',
	t_mode : '/'
	},
	{
	Name: 'MS-24 VC',
	img:"url(images/Mitsubishi/5.jpg)",
	price : '77,000/-',
	ton : '2',
	c_capacity : '3.4 kW',
	h_capacity : '/',
	p_input : '1150 W',
	eer : '2.75',
	color : 'White',
	type : 'Wall mounted split AC',
	s_mode : 'Yes',
	t_mode : '/'
	},
	{
	Name: 'Heavy Duty SRK25 CEVK',
	img:"url(images/Mitsubishi/6.jpg)",
	price : '80,000/-',
	ton : '1.5',
	c_capacity : '5.27 kW',
	h_capacity : '/',
	p_input : '1440 W',
	eer : '3.66',
	color : 'White',
	type : 'Wall mounted split AC',
	s_mode : 'Yes',
	t_mode : '/'
	},
	
	//Mitsubishi End here................................................................
	
	//orient Start here................................................................
	{
	Name: 'DC Inverter Easy Clean Split',
	img:"url(images/orient/1.jpg)",
	price : '54,000/-',
	ton : '1',
	c_capacity : '/',
	h_capacity : '/',
	p_input : '/',
	eer : '/',
	color : 'White',
	type : 'Wall mounted split AC',
	s_mode : '/',
	t_mode : '/'
	},
	{
	Name: 'DC Inverter Inventage',
	img:"url(images/orient/2.jpg)",
	price : '60,000/-',
	ton : '1.5',
	c_capacity : '/',
	h_capacity : '/',
	p_input : '/',
	eer : '/',
	color : 'White',
	type : 'Wall mounted split AC',
	s_mode : '/',
	t_mode : '/'
	},
	{
	Name: 'DC Inverter Ultron Plus',
	img:"url(images/orient/3.jpeg)",
	price : '96,000/-',
	ton : '2',
	c_capacity : '/',
	h_capacity : '/',
	p_input : '/',
	eer : '/',
	color : 'White',
	type : 'Wall mounted split AC',
	s_mode : '/',
	t_mode : '/'
	},
    {
	Name: 'DC Inverter Ultron',
	img:"url(images/orient/4.jpg)",
	price : '94,000/-',
	ton : '2',
	c_capacity : '/',
	h_capacity : '/',
	p_input : '/',
	eer : '/',
	color : 'White',
	type : 'Wall mounted split AC',
	s_mode : '/',
	t_mode : '/'
	},
    {
	Name: 'DC Inverter Prime',
	img:"url(images/orient/5.jpg)",
	price : '58,000/-',
	ton : '2',
	c_capacity : '/',
	h_capacity : '/',
	p_input : '/',
	eer : '/',
	color : 'White',
	type : 'Wall mounted split AC',
	s_mode : '/',
	t_mode : '/'
	},
	//orient End here................................................................
	
	//panadonic Start here................................................................
	{
	Name: 'YC12',
	img:"url(images/panasonic/1.jpeg)",
	price : '44,500/-',
	ton : '1',
	c_capacity : '12000 BTU',
	h_capacity : '/',
	p_input : '/',
	eer : '/',
	color : 'Black',
	type : 'Wall mounted split AC',
	s_mode : '/',
	t_mode : '/'
	},
	{
	Name: 'YC 24MKF',
	img:"url(images/panasonic/2.jpeg)",
	price : '73,000/-',
	ton : '1.5',
	c_capacity : '18000 BTU',
	h_capacity : '/',
	p_input : '/',
	eer : '/',
	color : 'Black',
	type : 'Wall mounted split AC',
	s_mode : '/',
	t_mode : '/'
	},
	{
	Name: 'CS-PC12MKF EcoNavi',
	img:"url(images/panasonic/6.jpg)",
	price : '47,000/-',
	ton : '1',
	c_capacity : '24000 BTU',
	h_capacity : '/',
	p_input : '/',
	eer : '/',
	color : 'Black',
	type : 'Wall mounted split AC',
	s_mode : '/',
	t_mode : '/'
	},
    {
	Name: 'CS-PC24MKF EcoNavi',
	img:"url(images/panasonic/4.jpg)",
	price : '74,000/-',
	ton : '2',
	c_capacity : '24000 BTU',
	h_capacity : '/',
	p_input : '/',
	eer : '/',
	color : 'Black',
	type : 'Wall mounted split AC',
	s_mode : '/',
	t_mode : '/'
	},
	//Panasonic End here................................................................
	
	//pel here................................................................
	{
	Name: 'PEL Cool Smile',
	img:"url(images/pel/1.jpg)",
	price : '35,000/-',
	ton : '1',
	c_capacity : '12000 BTU',
	h_capacity : '/',
	p_input : '/',
	eer : '/',
	color : 'Black',
	type : 'Wall mounted split AC',
	s_mode : 'Yes',
	t_mode : '/'
	},
	{
	Name: 'PEL Aspire',
	img:"url(images/pel/2.jpg)",
	price : '65,000/-',
	ton : '1.5',
	c_capacity : '18000 BTU',
	h_capacity : '/',
	p_input : '/',
	eer : '/',
	color : 'Black',
	type : 'Wall mounted split AC',
	s_mode : 'Yes',
	t_mode : '/'
	},
	{
	Name: 'PEL 24KDM',
	img:"url(images/pel/3.jpg)",
	price : '65,500/-',
	ton : '2',
	c_capacity : '24000 BTU',
	h_capacity : '/',
	p_input : '/',
	eer : '/',
	color : 'Black',
	type : 'Wall mounted split AC',
	s_mode : 'Yes',
	t_mode : '/'
	},
	
	//pel End here................................................................
	
	//sharp Start here................................................................
	{
	Name: 'Sharp AH-XP10NRV',
	img:"url(images/sharp/1.jpg)",
	price : '47,500/-',
	ton : '1',
	c_capacity : '12000 BTU',
	h_capacity : '/',
	p_input : '/',
	eer : '/',
	color : 'Gray',
	type : 'Wall mounted split AC',
	s_mode : '/',
	t_mode : 'Yes'
	},
	{
	Name: 'Sharp AH-XP18MV',
	img:"url(images/sharp/2.jpg)",
	price : '89,000/-',
	ton : '2',
	c_capacity : '18000 BTU',
	h_capacity : '/',
	p_input : '/',
	eer : '/',
	color : 'Gray',
	type : 'Wall mounted split AC',
	s_mode : '/',
	t_mode : 'Yes'
	},
	{
	Name: 'Sharp AH-AP24MMV',
	img:"url(images/sharp/3.jpg)",
	price : '79,000/-',
	ton : '2',
	c_capacity : '12000 BTU',
	h_capacity : '/',
	p_input : '/',
	eer : '/',
	color : 'Silver',
	type : 'Wall mounted split AC',
	s_mode : '/',
	t_mode : 'Yes'
	},
	
	//Sharp End here................................................................
	];

function compare(){
	var option_1= document.getElementById('option_1').value;
	var option_2= document.getElementById('option_2').value;
	for(var i =0 ;i<AC.length;i++)
	{
		if((option_1 == '------Select Product------' && option_2 == '------Select Product------') || (option_1 != '------Select Product------' && option_2 == '------Select Product------') || (option_1 == '------Select Product------' && option_2 != '------Select Product------'))
		{
			alert('please select both products')
			break;
		}
		else if(option_1 == option_2)
		{
			alert('Cant compare same product')
			item1("","","","","","","","","","","");
			item2("","","","","","","","","","","");
			break;
		}
		else if(option_1 == AC[i].Name)
		{
			item1(AC[i].Name,AC[i].img,AC[i].price,AC[i].ton,AC[i].c_capacity,AC[i].h_capacity,AC[i].p_input,AC[i].eer,AC[i].color,AC[i].type,AC[i].s_mode,AC[i].t_mode);
			document.getElementById('image-one').style.opacity = '1'
		}
		
		else if(option_2 == AC[i].Name)
		{
			item2(AC[i].Name,AC[i].img,AC[i].price,AC[i].ton,AC[i].c_capacity,AC[i].h_capacity,AC[i].p_input,AC[i].eer,AC[i].color,AC[i].type,AC[i].s_mode,AC[i].t_mode);
			document.getElementById('image-two').style.opacity = '1'
		}
	}

}