Index.PACKAGES = {"edu.holycross.shot.mid" : [], "edu.holycross.shot.mid.validator" : [{"name" : "edu.holycross.shot.mid.validator.EditorsRepo", "shortDescription" : "A class for working with HC-MID editorial work in alocal file system laid out according to conventions firstdefined in 2018.", "members_case class" : [{"label" : "orthoConfig", "tail" : ": File", "member" : "edu.holycross.shot.mid.validator.EditorsRepo.orthoConfig", "link" : "edu\/holycross\/shot\/mid\/validator\/EditorsRepo.html#orthoConfig:better.files.File", "kind" : "val"}, {"label" : "readersConfig", "tail" : ": File", "member" : "edu.holycross.shot.mid.validator.EditorsRepo.readersConfig", "link" : "edu\/holycross\/shot\/mid\/validator\/EditorsRepo.html#readersConfig:better.files.File", "kind" : "val"}, {"label" : "ctsCitation", "tail" : ": File", "member" : "edu.holycross.shot.mid.validator.EditorsRepo.ctsCitation", "link" : "edu\/holycross\/shot\/mid\/validator\/EditorsRepo.html#ctsCitation:better.files.File", "kind" : "val"}, {"label" : "ctsCatalog", "tail" : ": File", "member" : "edu.holycross.shot.mid.validator.EditorsRepo.ctsCatalog", "link" : "edu\/holycross\/shot\/mid\/validator\/EditorsRepo.html#ctsCatalog:better.files.File", "kind" : "val"}, {"label" : "rawTextsCex", "tail" : "(): String", "member" : "edu.holycross.shot.mid.validator.EditorsRepo.rawTextsCex", "link" : "edu\/holycross\/shot\/mid\/validator\/EditorsRepo.html#rawTextsCex:String", "kind" : "def"}, {"label" : "codicesCex", "tail" : "(): String", "member" : "edu.holycross.shot.mid.validator.EditorsRepo.codicesCex", "link" : "edu\/holycross\/shot\/mid\/validator\/EditorsRepo.html#codicesCex:String", "kind" : "def"}, {"label" : "dseCex", "tail" : "(): String", "member" : "edu.holycross.shot.mid.validator.EditorsRepo.dseCex", "link" : "edu\/holycross\/shot\/mid\/validator\/EditorsRepo.html#dseCex:String", "kind" : "def"}, {"label" : "libHeader", "tail" : "(): String", "member" : "edu.holycross.shot.mid.validator.EditorsRepo.libHeader", "link" : "edu\/holycross\/shot\/mid\/validator\/EditorsRepo.html#libHeader:String", "kind" : "def"}, {"label" : "rawTexts", "tail" : ": TextRepository", "member" : "edu.holycross.shot.mid.validator.EditorsRepo.rawTexts", "link" : "edu\/holycross\/shot\/mid\/validator\/EditorsRepo.html#rawTexts:edu.holycross.shot.ohco2.TextRepository", "kind" : "lazy val"}, {"label" : "dse", "tail" : "(): DseVector", "member" : "edu.holycross.shot.mid.validator.EditorsRepo.dse", "link" : "edu\/holycross\/shot\/mid\/validator\/EditorsRepo.html#dse:edu.holycross.shot.dse.DseVector", "kind" : "def"}, {"label" : "editionsRepository", "tail" : "(): TextRepository", "member" : "edu.holycross.shot.mid.validator.EditorsRepo.editionsRepository", "link" : "edu\/holycross\/shot\/mid\/validator\/EditorsRepo.html#editionsRepository:edu.holycross.shot.ohco2.TextRepository", "kind" : "def"}, {"label" : "editions", "tail" : "(): Corpus", "member" : "edu.holycross.shot.mid.validator.EditorsRepo.editions", "link" : "edu\/holycross\/shot\/mid\/validator\/EditorsRepo.html#editions:edu.holycross.shot.ohco2.Corpus", "kind" : "def"}, {"label" : "editionsCatalog", "tail" : "(): Catalog", "member" : "edu.holycross.shot.mid.validator.EditorsRepo.editionsCatalog", "link" : "edu\/holycross\/shot\/mid\/validator\/EditorsRepo.html#editionsCatalog:edu.holycross.shot.ohco2.Catalog", "kind" : "def"}, {"label" : "subcorpora", "tail" : "(): Vector[Corpus]", "member" : "edu.holycross.shot.mid.validator.EditorsRepo.subcorpora", "link" : "edu\/holycross\/shot\/mid\/validator\/EditorsRepo.html#subcorpora:Vector[edu.holycross.shot.ohco2.Corpus]", "kind" : "def"}, {"label" : "readers", "tail" : "(): Vector[ReadersPairing]", "member" : "edu.holycross.shot.mid.validator.EditorsRepo.readers", "link" : "edu\/holycross\/shot\/mid\/validator\/EditorsRepo.html#readers:Vector[edu.holycross.shot.mid.markupreader.ReadersPairing]", "kind" : "def"}, {"label" : "library", "tail" : "(): CiteLibrary", "member" : "edu.holycross.shot.mid.validator.EditorsRepo.library", "link" : "edu\/holycross\/shot\/mid\/validator\/EditorsRepo.html#library:edu.holycross.shot.scm.CiteLibrary", "kind" : "def"}, {"label" : "dirs", "tail" : ": Vector[File]", "member" : "edu.holycross.shot.mid.validator.EditorsRepo.dirs", "link" : "edu\/holycross\/shot\/mid\/validator\/EditorsRepo.html#dirs:scala.collection.immutable.Vector[better.files.File]", "kind" : "val"}, {"label" : "codicesCatalogs", "tail" : ": File", "member" : "edu.holycross.shot.mid.validator.EditorsRepo.codicesCatalogs", "link" : "edu\/holycross\/shot\/mid\/validator\/EditorsRepo.html#codicesCatalogs:better.files.File", "kind" : "val"}, {"label" : "codicesDir", "tail" : ": File", "member" : "edu.holycross.shot.mid.validator.EditorsRepo.codicesDir", "link" : "edu\/holycross\/shot\/mid\/validator\/EditorsRepo.html#codicesDir:better.files.File", "kind" : "val"}, {"label" : "libHeadersDir", "tail" : ": File", "member" : "edu.holycross.shot.mid.validator.EditorsRepo.libHeadersDir", "link" : "edu\/holycross\/shot\/mid\/validator\/EditorsRepo.html#libHeadersDir:better.files.File", "kind" : "val"}, {"label" : "textConfig", "tail" : ": File", "member" : "edu.holycross.shot.mid.validator.EditorsRepo.textConfig", "link" : "edu\/holycross\/shot\/mid\/validator\/EditorsRepo.html#textConfig:better.files.File", "kind" : "val"}, {"label" : "editionsDir", "tail" : ": File", "member" : "edu.holycross.shot.mid.validator.EditorsRepo.editionsDir", "link" : "edu\/holycross\/shot\/mid\/validator\/EditorsRepo.html#editionsDir:better.files.File", "kind" : "val"}, {"label" : "validationDir", "tail" : ": File", "member" : "edu.holycross.shot.mid.validator.EditorsRepo.validationDir", "link" : "edu\/holycross\/shot\/mid\/validator\/EditorsRepo.html#validationDir:better.files.File", "kind" : "val"}, {"label" : "dseDir", "tail" : ": File", "member" : "edu.holycross.shot.mid.validator.EditorsRepo.dseDir", "link" : "edu\/holycross\/shot\/mid\/validator\/EditorsRepo.html#dseDir:better.files.File", "kind" : "val"}, {"member" : "edu.holycross.shot.mid.validator.EditorsRepo#<init>", "error" : "unsupported entity"}, {"label" : "readerMap", "tail" : ": Map[String, Vector[MidMarkupReader]]", "member" : "edu.holycross.shot.mid.validator.EditorsRepo.readerMap", "link" : "edu\/holycross\/shot\/mid\/validator\/EditorsRepo.html#readerMap:Map[String,Vector[edu.holycross.shot.mid.markupreader.MidMarkupReader]]", "kind" : "val"}, {"label" : "baseDir", "tail" : ": String", "member" : "edu.holycross.shot.mid.validator.EditorsRepo.baseDir", "link" : "edu\/holycross\/shot\/mid\/validator\/EditorsRepo.html#baseDir:String", "kind" : "val"}, {"label" : "logger", "tail" : ": Logger", "member" : "wvlet.log.LazyLogger.logger", "link" : "edu\/holycross\/shot\/mid\/validator\/EditorsRepo.html#logger:wvlet.log.Logger", "kind" : "lazy val"}, {"label" : "logAt", "tail" : "(logLevel: LogLevel, message: Any): Unit", "member" : "wvlet.log.LoggingMethods.logAt", "link" : "edu\/holycross\/shot\/mid\/validator\/EditorsRepo.html#logAt(logLevel:wvlet.log.LogLevel,message:Any):Unit", "kind" : "macro def"}, {"label" : "trace", "tail" : "(message: Any, cause: Throwable): Unit", "member" : "wvlet.log.LoggingMethods.trace", "link" : "edu\/holycross\/shot\/mid\/validator\/EditorsRepo.html#trace(message:Any,cause:Throwable):Unit", "kind" : "macro def"}, {"label" : "trace", "tail" : "(message: Any): Unit", "member" : "wvlet.log.LoggingMethods.trace", "link" : "edu\/holycross\/shot\/mid\/validator\/EditorsRepo.html#trace(message:Any):Unit", "kind" : "macro def"}, {"label" : "debug", "tail" : "(message: Any, cause: Throwable): Unit", "member" : "wvlet.log.LoggingMethods.debug", "link" : "edu\/holycross\/shot\/mid\/validator\/EditorsRepo.html#debug(message:Any,cause:Throwable):Unit", "kind" : "macro def"}, {"label" : "debug", "tail" : "(message: Any): Unit", "member" : "wvlet.log.LoggingMethods.debug", "link" : "edu\/holycross\/shot\/mid\/validator\/EditorsRepo.html#debug(message:Any):Unit", "kind" : "macro def"}, {"label" : "info", "tail" : "(message: Any, cause: Throwable): Unit", "member" : "wvlet.log.LoggingMethods.info", "link" : "edu\/holycross\/shot\/mid\/validator\/EditorsRepo.html#info(message:Any,cause:Throwable):Unit", "kind" : "macro def"}, {"label" : "info", "tail" : "(message: Any): Unit", "member" : "wvlet.log.LoggingMethods.info", "link" : "edu\/holycross\/shot\/mid\/validator\/EditorsRepo.html#info(message:Any):Unit", "kind" : "macro def"}, {"label" : "warn", "tail" : "(message: Any, cause: Throwable): Unit", "member" : "wvlet.log.LoggingMethods.warn", "link" : "edu\/holycross\/shot\/mid\/validator\/EditorsRepo.html#warn(message:Any,cause:Throwable):Unit", "kind" : "macro def"}, {"label" : "warn", "tail" : "(message: Any): Unit", "member" : "wvlet.log.LoggingMethods.warn", "link" : "edu\/holycross\/shot\/mid\/validator\/EditorsRepo.html#warn(message:Any):Unit", "kind" : "macro def"}, {"label" : "error", "tail" : "(message: Any, cause: Throwable): Unit", "member" : "wvlet.log.LoggingMethods.error", "link" : "edu\/holycross\/shot\/mid\/validator\/EditorsRepo.html#error(message:Any,cause:Throwable):Unit", "kind" : "macro def"}, {"label" : "error", "tail" : "(message: Any): Unit", "member" : "wvlet.log.LoggingMethods.error", "link" : "edu\/holycross\/shot\/mid\/validator\/EditorsRepo.html#error(message:Any):Unit", "kind" : "macro def"}, {"label" : "synchronized", "tail" : "(arg0: ⇒ T0): T0", "member" : "scala.AnyRef.synchronized", "link" : "edu\/holycross\/shot\/mid\/validator\/EditorsRepo.html#synchronized[T0](x$1:=>T0):T0", "kind" : "final def"}, {"label" : "##", "tail" : "(): Int", "member" : "scala.AnyRef.##", "link" : "edu\/holycross\/shot\/mid\/validator\/EditorsRepo.html###():Int", "kind" : "final def"}, {"label" : "!=", "tail" : "(arg0: Any): Boolean", "member" : "scala.AnyRef.!=", "link" : "edu\/holycross\/shot\/mid\/validator\/EditorsRepo.html#!=(x$1:Any):Boolean", "kind" : "final def"}, {"label" : "==", "tail" : "(arg0: Any): Boolean", "member" : "scala.AnyRef.==", "link" : "edu\/holycross\/shot\/mid\/validator\/EditorsRepo.html#==(x$1:Any):Boolean", "kind" : "final def"}, {"label" : "ne", "tail" : "(arg0: AnyRef): Boolean", "member" : "scala.AnyRef.ne", "link" : "edu\/holycross\/shot\/mid\/validator\/EditorsRepo.html#ne(x$1:AnyRef):Boolean", "kind" : "final def"}, {"label" : "eq", "tail" : "(arg0: AnyRef): Boolean", "member" : "scala.AnyRef.eq", "link" : "edu\/holycross\/shot\/mid\/validator\/EditorsRepo.html#eq(x$1:AnyRef):Boolean", "kind" : "final def"}, {"label" : "finalize", "tail" : "(): Unit", "member" : "scala.AnyRef.finalize", "link" : "edu\/holycross\/shot\/mid\/validator\/EditorsRepo.html#finalize():Unit", "kind" : "def"}, {"label" : "wait", "tail" : "(arg0: Long, arg1: Int): Unit", "member" : "scala.AnyRef.wait", "link" : "edu\/holycross\/shot\/mid\/validator\/EditorsRepo.html#wait(x$1:Long,x$2:Int):Unit", "kind" : "final def"}, {"label" : "wait", "tail" : "(arg0: Long): Unit", "member" : "scala.AnyRef.wait", "link" : "edu\/holycross\/shot\/mid\/validator\/EditorsRepo.html#wait(x$1:Long):Unit", "kind" : "final def"}, {"label" : "wait", "tail" : "(): Unit", "member" : "scala.AnyRef.wait", "link" : "edu\/holycross\/shot\/mid\/validator\/EditorsRepo.html#wait():Unit", "kind" : "final def"}, {"label" : "notifyAll", "tail" : "(): Unit", "member" : "scala.AnyRef.notifyAll", "link" : "edu\/holycross\/shot\/mid\/validator\/EditorsRepo.html#notifyAll():Unit", "kind" : "final def"}, {"label" : "notify", "tail" : "(): Unit", "member" : "scala.AnyRef.notify", "link" : "edu\/holycross\/shot\/mid\/validator\/EditorsRepo.html#notify():Unit", "kind" : "final def"}, {"label" : "clone", "tail" : "(): AnyRef", "member" : "scala.AnyRef.clone", "link" : "edu\/holycross\/shot\/mid\/validator\/EditorsRepo.html#clone():Object", "kind" : "def"}, {"label" : "getClass", "tail" : "(): Class[_]", "member" : "scala.AnyRef.getClass", "link" : "edu\/holycross\/shot\/mid\/validator\/EditorsRepo.html#getClass():Class[_]", "kind" : "final def"}, {"label" : "asInstanceOf", "tail" : "(): T0", "member" : "scala.Any.asInstanceOf", "link" : "edu\/holycross\/shot\/mid\/validator\/EditorsRepo.html#asInstanceOf[T0]:T0", "kind" : "final def"}, {"label" : "isInstanceOf", "tail" : "(): Boolean", "member" : "scala.Any.isInstanceOf", "link" : "edu\/holycross\/shot\/mid\/validator\/EditorsRepo.html#isInstanceOf[T0]:Boolean", "kind" : "final def"}], "case class" : "edu\/holycross\/shot\/mid\/validator\/EditorsRepo.html", "kind" : "case class"}], "edu.holycross" : [], "edu.holycross.shot" : [], "edu" : [], "better" : [], "better.files" : []};