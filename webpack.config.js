var path =require('path');

module.exports = {
    
	//入口文件
        
	entry:'./app/index.js',
	    
	//出口文件
	        
	output:{
		        
		filename:'index.js',
			        
		path:path.resolve(__dirname,'dist')
				    
	}
				    	
}
