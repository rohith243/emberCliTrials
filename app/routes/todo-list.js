import Ember from 'ember';
import ajax from 'ic-ajax';

export default Ember.Route.extend({

	model: function() {
	    return ajax({
            url: 'https://api.github.com/repos/emberjs/ember.js/pulls',
            type: 'get'
        }).then(function(data) {
            return data;
        });
	}
});
