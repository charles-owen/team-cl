
export const Teaming = function(data) {
	if(data !== undefined) {
		this.id = data.id;
		this.tag = data.tag;
		this.name = data.name;
		this.public = data.public;
	} else {
		this.id = 0;
		this.tag = '';
		this.name = '';
		this.public = true;
	}

}