import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('chamber-upcase', 'Integration | Component | chamber upcase', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{chamber-upcase}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#chamber-upcase}}
      template block text
    {{/chamber-upcase}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
