const {test}=QUnit;

QUnit.module('Felület tesztelése', function() {
    test('létezik e a nevkiir', function(assert) {
      assert.ok(nevkiir("letezik a nevkiir");
      assert.ok(nevkiir("letezik az atalakit");
    });
    test('függvények-e', function(assert) {
        assert.ok(typeof nevkiir=== 'function', 'függvény' );
        assert.ok(typeof atalakit==='function', 'függvény');
  });
  QUnit.test('függvények-e', function(assert) {
    assert.ok(typeof nevkiir=== 'function', 'függvény' );
    assert.ok(typeof atalakit==='function', 'függvény');
});
QUnit.test('nevatalakit - két tagú név', function(assert) {
    assert.equal(atalakit ('Kis G'),[Kis , G]);
})

})