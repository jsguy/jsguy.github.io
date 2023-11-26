//	Mithril component that shows icons for sharing on social networks
var smForm = function(slug) {
	slug = slug || 'blog';
	return [
		'<form method="POST" action="https://api.staticman.net/v2/entry/jsguy/jsguy.github.io/master/comments">',
			//'<input name="options[redirect]" type="hidden" value="https://my-site.com">',
			//'<!-- e.g. "2016-01-02-this-is-a-post" -->',
			'<input name="options[slug]" type="hidden" value="'+slug+'">',
			'<label><div>Name</div><input name="fields[name]" type="text"></label>',
			'<label><div>E-mail</div><input name="fields[email]" type="email"></label>',
			'<label><div>Message</div><textarea name="fields[message]"></textarea></label>',
			'',
			'<button type="submit">Go!</button>',
		'</form>'
	].join("\n");
};

var StaticmanComponent = function(slug){
	return m('span', {className: 'comment-form'}, m.trust(smForm(slug)));
};