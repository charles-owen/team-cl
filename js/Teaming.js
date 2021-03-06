/**
 * Object the represents a teaming
 * @param data
 * @constructor
 */
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

	this.clone = function() {
		return new Teaming(this);
	}
}