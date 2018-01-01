import org.scalatest.FlatSpec

class ElementSpec extends FlatSpec {
  "A list" should "have dual operations" in {
    val lis = List(1, 2, 3)
    assert(lis.init ::: List(lis.last) == lis.head :: lis.tail)
  }
  it should "have an inverse operation" in {
    val lis = List(1, 2)
    assert(lis.reverse.reverse == lis)
  }
}
